import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { TaskModel } from '@/models/task'

// Fixed signature for DELETE request handler in App Router
export async function DELETE(
  request: Request,
  context: { params: { taskId: string } }
) {
  // Access route parameters via context.params
  try {
    await connectToDatabase()
    const taskId = parseInt(context.params.taskId)
    
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