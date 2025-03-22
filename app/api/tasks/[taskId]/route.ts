import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { TaskModel } from '@/models/task'

/**
 * DELETE handler for task deletion
 * Uses URL structure to extract the taskId parameter
 */
export async function DELETE(request: Request) {
  try {
    await connectToDatabase()
    
    // Extract taskId from URL
    const url = new URL(request.url)
    const pathSegments = url.pathname.split('/')
    const taskIdStr = pathSegments[pathSegments.length - 1]
    const taskId = parseInt(taskIdStr)
    
    if (isNaN(taskId)) {
      return NextResponse.json(
        { error: 'Invalid task ID' },
        { status: 400 }
      )
    }
    
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