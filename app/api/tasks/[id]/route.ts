import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import {TaskModel} from '@/models/task' // assuming your mongoose model is here



//UPDATE Task
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB()
    const body = await request.json()
    const updatedTask = await TaskModel.findByIdAndUpdate(params.id, body, { new: true })
    return NextResponse.json(updatedTask)
  } catch (err) {
    return NextResponse.json({ error: 'Failed to update task' + err }, { status: 500 })
  }
}


//DELETE Task 
export async function DELETE(request:Request, {params}: {params: {id: string}}){
  try{
    await connectDB()
    const TaskId = params.id
    const deletedTask = await TaskModel.findOneAndDelete({taskId: TaskId})
    return NextResponse.json({deletedTask})
  }catch(err){
    NextResponse.json({error: 'Failed to delet the task' + err}, {status: 500})
  } 
}