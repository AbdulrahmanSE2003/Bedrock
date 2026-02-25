import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import SidebarFooterUser from "@/app/_components/sidebar/SidebarFooterUser";
import { Logo } from "./ui/Logo";
import SidebarTabs from "@/app/_components/sidebar/SidebarTabs";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className={``}>
      {/* HEADER */}
      <SidebarHeader className={`border h-12 border-r-0`}>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className={`py-3.5 transition-colors duration-500 hover:bg-zinc-200 dark:hover:bg-zinc-800 data-closed`}
              asChild
            >
              <Link href={"/dashboard "}>
                <Logo />
                <span className={`font-medium`}>My Bedrock</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarTabs />
      <SidebarFooterUser />
    </Sidebar>
  );
}
