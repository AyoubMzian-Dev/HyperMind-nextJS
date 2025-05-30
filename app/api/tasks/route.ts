import { NextResponse } from 'next/server'
import { TaskModel } from '@/models/task'
import { connectDB } from '@/lib/db'
// import { DeleteTaskSchema, NewTaskSchema } from '@/schemas/tasks'
// import { ZodError } from 'zod'



// GET /api/tasks - Fetch all tasks
export async function GET() {
  try {
    await connectDB()
    const tasks = await TaskModel.find()
    return NextResponse.json(tasks)
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch tasks' + err }, { status: 500 })
  }
}



// POST /api/tasks - Create a new task
export async function POST(request: Request) {
  try {
    await connectDB()
    const body = await request.json()
    const newTask = await TaskModel.create(body)
    return NextResponse.json(newTask, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to create task' + err }, { status: 500 })
  }
}



// PUT /api/tasks - Update a task
// @param request: Request - The incoming request object containing taskId and update data
// @returns Promise<NextResponse> - The response with updated task or error
// export async function PUT(request: Request) {
//   try {
//     await connectDB()
//     const body = await request.json()
//     const { taskId, ...updateData } = body

//     if (!taskId) {
//       return NextResponse.json({ error: 'Task ID is required' }, { status: 400 })
//     }

//     const updatedTask = await TaskModel.findOneAndUpdate(
//       { taskId: taskId },
//       updateData,
//       { new: true }
//     )

//     if (!updatedTask) {
//       return NextResponse.json({ error: 'Task not found' }, { status: 404 })
//     }

//     return NextResponse.json(updatedTask)
//   } catch (err) {
//     return NextResponse.json({ error: 'Failed to update task' + err }, { status: 500 })
//   }
// }



// DELETE /api/tasks - Delete a task
// @param request: Request - The incoming request object containing taskId
// @returns Promise<NextResponse> - The response with deleted task or error
export async function DELETE(request: Request) {
  try {
    await connectDB()
    const { taskId } = await request.json()

    if (!taskId) {
      return NextResponse.json({ error: 'Task ID is required' }, { status: 400 })
    }

    const deletedTask = await TaskModel.findOneAndDelete({ taskId: taskId })

    if (!deletedTask) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Task deleted successfully', deletedTask })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to delete task' + err }, { status: 500 })
  }
}