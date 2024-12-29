import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

 
import React from 'react'

interface LayoutProps {
  children: React.ReactNode;
  theme?: string;
  layout?: string;

}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
        <AppSidebar />
        <main>
            <SidebarTrigger />
            {children}
        </main>
    </SidebarProvider>
  )
}
