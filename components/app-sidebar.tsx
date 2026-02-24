import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Home,
  LayoutDashboard,
  Mail,
  Settings2Icon,
  Sprout,
  Timer,
} from "lucide-react";
import Link from "next/link";
import SidebarFooterUser from "@/app/_components/sidebar/SidebarFooterUser";

const tabs = [
  { name: "Dashboard", icon: LayoutDashboard, url: "/dashboard" },
  { name: "Inbox", icon: Mail, url: "/inbox" },
  { name: "Habits", icon: Sprout, url: "/habits" },
  { name: "Pomodoro", icon: Timer, url: "/pomodoro" },
  { name: "Settings", icon: Settings2Icon, url: "/settings" },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      {/* HEADER */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className={`py-4.5 transition-colors duration-500 hover:bg-zinc-200 dark:hover:bg-zinc-800`}
              asChild
            >
              <Link href={"/"}>
                <Home />
                <span className={`font-medium`}>My Bedrock</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className={`p-2`}>
          {tabs.map((tab) => (
            <SidebarMenuItem key={tab.name}>
              <SidebarMenuButton
                asChild
                className={`py-4.5 transition-colors duration-500 hover:bg-zinc-200 dark:hover:bg-zinc-800`}
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
      <SidebarFooterUser />
    </Sidebar>
  );
}
