import { Header } from "@/components/Header";
import React from 'react'

export default function LessonLayout({ children }: {children: React.ReactNode}) {
  return (
    <main className="bg-background text-white w-full">
      <div className="flex justify-between">
        <div className="w-full h-full">
          <Header/>
          {children}
        </div>
      </div>
    </main>
  )
} 