'use client'
import { Calendar, Home, Book, CheckSquare } from "lucide-react"
import { usePathname } from 'next/navigation'
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
    <Sidebar side="left" variant="sidebar" className="m-0 border-gray-800 border-r bg-gray-900/50 backdrop-blur-sm">
      <SidebarContent>
        <SidebarGroup className="mt-20">
          <SidebarGroupLabel className="px-4 text-xs font-medium uppercase tracking-wider text-gray-400">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem 
                    key={item.title}
                    className={`my-1 mx-2 rounded-lg transition-colors ${
                      isActive ? 'bg-gray-800/50' : 'hover:bg-gray-800/30'
                    }`}
                  >
                    <SidebarMenuButton asChild>
                      <a 
                        href={item.url} 
                        className="flex items-center gap-3 px-4 py-2"
                      >
                        <item.icon 
                          className={`h-4 w-4 ${
                            isActive ? 'text-green-500' : 'text-gray-400'
                          }`}
                        />
                        <span className={`text-sm ${
                          isActive ? 'font-medium text-white' : 'text-gray-400'
                        }`}>
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
