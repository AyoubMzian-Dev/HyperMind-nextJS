"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { ObjectId } from 'mongodb'

interface StartButtonProps {
    children: ObjectId;
    className?: string;
}

export default function StartButton({ children, className }: StartButtonProps) {
    const router = useRouter()
    const handleStartLesson = (lessonId: ObjectId) => {
        router.push(`/lessons/${lessonId.toString()}`)
    }

    return (
        <Button 
            className={className} 
            onClick={() => handleStartLesson(children)}
        >
            Start
        </Button>
    )
}
