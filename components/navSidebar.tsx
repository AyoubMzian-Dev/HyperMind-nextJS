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
    title: "Home",
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

// Subject menu items
// const subjects = [
//   {
//     title: "Mathematics",
//     url: "#",
//     icon: Book,
//   },
//   {
//     title: "Geography",
//     url: "#",
//     icon: Globe,
//   },
//   {
//     title: "Computer Science",
//     url: "#",
//     icon: Code,
//   },
//   {
//     title: "History",
//     url: "#",
//     icon: Calendar,
//   },
//   {
//     title: "Biology",
//     url: "#",
//     icon: Globe,
//   },
//   {
//     title: "Chemistry",
//     url: "#",
//     icon: Atom,
//   },
//   {
//     title: "Physics",
//     url: "#",
//     icon: Atom,
//   },
//   {
//     title: "Literature",
//     url: "#",
//     icon: BookOpen,
//   },
//   {
//     title: "Art",
//     url: "#",
//     icon: Palette,
//   },
// ]

export function NavSideBar() {
  const pathname = usePathname();



  return (
    <Sidebar side="left" variant="sidebar">
 
      <SidebarContent>
        <SidebarGroup className="mt-16">
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className={pathname === item.url ? 'bg-sidebar-accent rounded-md text-sidebar-accent-foreground font-bold' : '' }  key={item.title}>
                  <SidebarMenuButton className="rounded-md" asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
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
