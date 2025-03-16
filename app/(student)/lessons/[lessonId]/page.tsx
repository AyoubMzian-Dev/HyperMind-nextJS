import React from 'react'
import { LessonSidebar } from '@/components/lessonSidebar'
import { LessonContent } from '@/components/lessonContent'
import VideoPlayer from '@/components/VideoPlayer'
import AIChat from '@/components/AIChat'

export default function LessonPage() {
  return (
    <div className="min-h-screen bg-gray-950 pt-14">
      <main className="flex max-w-[1800px] mx-auto">
        {/* Left sidebar */}
        <div className="w-80 flex-shrink-0 border-r border-gray-800 min-h-[calc(100vh-3.5rem)]">
          <LessonSidebar />
        </div>

        {/* Main content area */}
        <div className="flex-1 p-6">
          <div className="flex gap-6">
            {/* Left side - Lesson content */}
            <div className="flex-1 max-w-3xl">
              <LessonContent />
            </div>

            {/* Right side - Video and AI Chat */}
            <div className="w-[400px] space-y-4 sticky top-20">
              <VideoPlayer />
              <AIChat />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
