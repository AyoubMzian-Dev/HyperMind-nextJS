import { Header } from "@/components/Header";
import { NavSideBar } from "@/components/navSidebar";
import { SidebarProvider,  } from "@/components/ui/sidebar"

import React from 'react'



export default function Layout({ children }: {children: React.ReactNode}) {
  return (
   

      <main className="bg-background  flex flex-col text-white w-full ">
        <div className=" flex justify-between">
          <SidebarProvider className={" p-0"}>
            <NavSideBar/>
          </SidebarProvider>
          <div className="lg:w-[calc(100%-12rem)] lg:h-full block ">
          <Header/>
            {children}
          </div>
        </div>
      </main>

  )
}
