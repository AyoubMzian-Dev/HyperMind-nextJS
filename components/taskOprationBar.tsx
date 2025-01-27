import React from 'react'
import { Button } from './ui/button'
import TaskForm from './taskForm'
import { Plus } from 'lucide-react'
export default function TaskOprationBar() {
    return (
        <div className='w-2/3 p-2 m-2 flex self-center justify-between bg-sectionsBackground'>
            <div>
                <Button className='bg-componentBg h-8 text-buttonText hover:bg-componentBgHover mx-1'>fillter</Button>
                <Button className='bg-componentBg h-8 text-buttonText hover:bg-componentBgHover mx-1'>fillter</Button>
                <Button className='bg-componentBg h-8 text-buttonText hover:bg-componentBgHover mx-1'>fillter</Button>
                <Button className='bg-componentBg h-8 text-buttonText hover:bg-componentBgHover mx-1'>fillter</Button>
            </div>
            <div>
                <TaskForm>
                    <Plus className="mr-2 w-4" />New task
                </TaskForm>
            </div>
        </div>
    )
}
