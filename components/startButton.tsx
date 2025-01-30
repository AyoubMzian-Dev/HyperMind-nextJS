"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

export default function StartButton({ children }: { children: string }) {

    const router = useRouter()
    const handleStartLesson = (lessonId: string) => {

    router.push(`/lessons/${lessonId}`)
    }


  return (
    <Button className="w-20 bg-specialColor hover:bg-specialColorHover" onClick={() => handleStartLesson(children)}>Start</Button>
  )
}
