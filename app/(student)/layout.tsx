'use client'

import { Header } from "@/components/Header";
import { NavSideBar } from "@/components/navSidebar";
import { SidebarProvider } from "@/components/ui/sidebar"
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Layout({ children }: {children: React.ReactNode}) {
  const pathname = usePathname();
  const isLessonPage = pathname?.includes('/lessons/');

  return (
    <main className="bg-background text-white w-full">
      <div className="flex">
        {!isLessonPage && (
          <SidebarProvider>
            <NavSideBar />
          </SidebarProvider>
        )}
        <div className={`${isLessonPage ? 'w-full' : 'lg:w-[calc(100%-12rem)]'} min-h-screen`}>
          <Header />
          {children}
        </div>
      </div>
    </main>
  )
}
