'use client'
import { Calendar, Home, Bell, Book, Globe, Code, Atom, BookOpen, Palette, CheckSquare, MessageCircle } from "lucide-react"

import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
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
    title: "Subjects",
    url: "/subjects",
    icon: Book,
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
  },
  {
    title: "Tasks",
    url: "/tasks",
    icon: CheckSquare,
  },
  {
    title: "Chat",
    url: "/chat",
    icon: MessageCircle,
  },
]

// Subject menu items
const subjects = [
  {
    title: "Mathematics",
    url: "#",
    icon: Book,
  },
  {
    title: "Geography",
    url: "#",
    icon: Globe,
  },
  {
    title: "Computer Science",
    url: "#",
    icon: Code,
  },
  {
    title: "History",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Biology",
    url: "#",
    icon: Globe,
  },
  {
    title: "Chemistry",
    url: "#",
    icon: Atom,
  },
  {
    title: "Physics",
    url: "#",
    icon: Atom,
  },
  {
    title: "Literature",
    url: "#",
    icon: BookOpen,
  },
  {
    title: "Art",
    url: "#",
    icon: Palette,
  },
]

export function AppSidebar() {
  const pathname = usePathname();

  // Log the pathname and item URLs outside of the JSX
  console.log(pathname);
  items.forEach(item => console.log(item.url));

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenuButton>

        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
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
        <SidebarGroup>
          <SidebarGroupLabel>Subjects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {subjects.map((subject) => (
                <SidebarMenuItem className="rounded-md" key={subject.title}>
                  <SidebarMenuButton className="" asChild>
                    <a href={subject.url}>
                      <subject.icon />
                      <span>{subject.title}</span>
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
