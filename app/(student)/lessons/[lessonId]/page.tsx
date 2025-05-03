import React from 'react'
import { LessonSidebar } from '@/components/lessonSidebar'
import { LessonContent } from '@/components/lessonContent'
import VideoPlayer from '@/components/VideoPlayer'
import AIChat from '@/components/AIChat'

export default function LessonPage() {
  return (
    <main className="flex w-f justify-between  mx-auto">
      {/* Left sidebar */}
      <div className="w-80 flex-shrink-0 border-r border-gray-800 min-h-[calc(100vh-3.5rem)]">
        <LessonSidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex justify-between p-6">

        {/* Left side - Lesson content */}
        <div className="flex-1 lg:pr-6">
          <LessonContent />
        </div>

        {/* Right side - Video and AI Chat */}
        <div className="w-[400px] slef-end space-y-4 sticky pt-14">
          <div className='fixed space-y-4 w-[400px]'>

          <VideoPlayer  />
          <AIChat />
          </div>
        </div>
      </div>
    </main>
  )
}
