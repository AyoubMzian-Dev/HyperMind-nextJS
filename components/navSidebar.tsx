'use client'
import { Calendar, Home, Book,  CheckSquare,  } from "lucide-react"

import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


 




// Navigation menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Lessons",
    url: "/lessons",
    icon: Book,
  },
  {
    title: "Tasks",
    url: "/tasks",
    icon: CheckSquare,
  },
  // {
  //   title: "Chat",
  //   url: "/chat",
  //   icon: MessageCircle,
  // },
]



export function NavSideBar() {
  const pathname = usePathname();



  return (
    <Sidebar side="left" variant="sidebar" className=" m-0 border-gray-800  bg-sectionsBackground">
 {/*go and fuck your self */}
 {/* done TODO fix the styling of the side bar, and fix the layout */}
      <SidebarContent>
        <SidebarGroup className="mt-32 " >
          <SidebarGroupLabel className="text-sm mb-4">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className={pathname === item.url ? 'bg-specialColor  text-accent' : '' }  key={item.title}>
                  <SidebarMenuButton className="rounded-md hover:bg-primary my-1 hover:border-[2px] hover:border-solid hover:border-green-500" asChild>
                    <a href={item.url} >
                      <item.icon className={"w-4 text-2xl"}/>
                      <span className={"text-base mx-2"}>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
      </SidebarContent>
    </Sidebar>
  );
}
