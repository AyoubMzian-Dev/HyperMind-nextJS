import { NextResponse } from 'next/server'
import { TaskModel } from '@/models/task'
import { connectDB } from '@/lib/db'
import { DeleteTaskSchema, NewTaskSchema } from '@/schemas/tasks'
import { ZodError } from 'zod'



// GET /api/tasks - Fetch all tasks
export async function GET() {

  try {
    await (connectDB())
    const tasks = await TaskModel.find()
    return NextResponse.json(tasks)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 })
  }
}



// POST /api/tasks - Create a new task
export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Received task data:', body) // Debug log

    // Validate request body against schema
    const validatedData = NewTaskSchema.parse(body)
    console.log('Validated data:', validatedData) // Debug log

    await connectDB()

    // Generate IDs for nested arrays if they don't have them
    const taskSteps = (validatedData.taskSteps || []).map((step, index) => ({
      ...step,
      stepId: step.stepId || Date.now() + index,
      stepCompleted: step.stepCompleted || false
    }))

    const taskAttachments = (validatedData.taskAttachments || []).map((attachment, index) => ({
      ...attachment,
      id: attachment.id || Date.now() + index + 1000 // Offset to avoid ID conflicts
    }))

    const taskLinks = (validatedData.taskLinks || []).map((link, index) => ({
      ...link,
      id: link.id || Date.now() + index + 2000 // Offset to avoid ID conflicts
    }))

    // Create new task with processed data
    const newTask = await TaskModel.create({
      ...validatedData,
      taskId: Date.now(),
      taskStatus: 'IN_PROGRESS',
      taskCreatedDate: new Date().toISOString().split('T')[0],
      taskSteps,
      taskAttachments,
      taskLinks,
      taskTags: validatedData.taskTags || []
    })

    console.log('Created task:', newTask) // Debug log

    return NextResponse.json(newTask, { status: 201 })
  } catch (error) {
    console.error('Error creating task:', error)

    // Handle validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: 'Invalid task data',
          details: error.errors.map(err => ({
            path: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }

    // Handle other errors
    const errorMessage = error instanceof Error ? error.message : 'Failed to create task'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}





// DELETE /api/task - task by id 
export async function DELETE(request: Request) {
  const body = await request.json()

  try {
    const validatedData = DeleteTaskSchema.parse(body)
    const task = await TaskModel.findOne({ taskId: validatedData.taskId }) || undefined

      if(task){
        await task.deleteOne() 
        return NextResponse.json({ message: 'Task deleted successfully' }, { status: 200 })
      }else{
      return NextResponse.json({ error: `Task not found: ` }, { status: 404 })
    }
  } catch (err) {
    return NextResponse.json(err, { status: 400 })

  }


}