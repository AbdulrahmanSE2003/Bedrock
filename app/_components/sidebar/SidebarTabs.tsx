"use client";

import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

import {
  Calendar,
  Github,
  KanbanSquare,
  LayoutDashboard,
  Notebook,
  Settings2Icon,
  Sprout,
  Timer,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Dashboard", icon: LayoutDashboard, url: "/dashboard" },
  { name: "Tasks", icon: KanbanSquare, url: "/tasks" },
  { name: "Habits", icon: Sprout, url: "/habits" },
  { name: "Pomodoro", icon: Timer, url: "/pomodoro" },
  { name: "Github", icon: Github, url: "/github" },
  { name: "Content", icon: Notebook, url: "/content" },
  { name: "Settings", icon: Settings2Icon, url: "/settings" },
];

const SidebarTabs = () => {
  const pathName = usePathname();
  return (
    <SidebarContent>
      <SidebarMenu className={`p-2 space-y-2`}>
        {tabs.map((tab) => (
          <SidebarMenuItem key={tab.name}>
            <SidebarMenuButton
              asChild
              className={cn(
                `transition-colors duration-500 hover:bg-zinc-200 dark:hover:bg-zinc-800`,
                pathName === tab.url && "bg-zinc-200 dark:bg-zinc-800",
              )}
            >
              <Link href={tab.url}>
                <tab.icon />
                <span className={`font-medium`}>{tab.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
      <SidebarGroup />
    </SidebarContent>
  );
};

export default SidebarTabs;
