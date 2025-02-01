
import React from 'react'
import {LessonSidebar} from '@/components/lessonSidebar'
import { LessonContent } from '@/components/lessonContent'







export default function page () {


  return (
    <main className=' flex ml-24 h-full'>
      <LessonSidebar/>
      <LessonContent/>

    </main>
  )
}
