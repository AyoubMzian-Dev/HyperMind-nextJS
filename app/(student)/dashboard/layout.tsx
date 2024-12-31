import { NavSideBar } from "@/components/navSidebar";
import { SidebarProvider,  } from "@/components/ui/sidebar"

import React from 'react'



export default function Layout({ children }: {children: React.ReactNode}) {
  return (
   

      <main className="bg-black text-white w-full flex justify-between">
          <SidebarProvider>
            <NavSideBar/>
          </SidebarProvider>
            {children}
      </main>

  )
}
