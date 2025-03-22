import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { TaskModel } from '@/models/task'

export async function DELETE(
  request: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    await connectToDatabase()
    const taskId = parseInt(params.taskId)
    
    const deletedTask = await TaskModel.findOneAndDelete({ taskId })
    
    if (!deletedTask) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ message: 'Task deleted successfully' })
  } catch (error) {
    console.error('Error deleting task:', error)
    return NextResponse.json(
      { error: 'Failed to delete task' },
      { status: 500 }
    )
  }
} 