
import React from 'react'
import {LessonSidebar} from '@/components/lessonSidebar'
import { LessonArtical } from '@/components/lessonArtical'







export default function page () {


  return (
    <main className=' flex ml-24 h-full'>
      <LessonSidebar/>
      <LessonArtical/>

    </main>
  )
}
