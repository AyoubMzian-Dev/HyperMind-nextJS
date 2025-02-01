import { Header } from "@/components/Header";
import { NavSideBar } from "@/components/navSidebar";
import { SidebarProvider,  } from "@/components/ui/sidebar"

import React from 'react'



export default function Layout({ children }: {children: React.ReactNode}) {
  return (
   

      <main className="bg-black flex flex-col text-white w-full ">
          <Header/>
        <div className=" flex justify-between">
          <SidebarProvider>
            <NavSideBar/>
          </SidebarProvider>
          <div className="lg:w-[calc(100%-12rem)] lg:h-[calc(100vh-4.5rem)] self-end">
            {children}
          </div>
        </div>
      </main>

  )
}
