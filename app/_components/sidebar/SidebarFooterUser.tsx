import { auth } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import { ChevronUp, User2 } from "lucide-react";
import LogoutButton from "../LogoutButton";
import Link from "next/link";

const SidebarFooterUser = async () => {
  const session = await auth();

  return (
    <SidebarFooter className="p-1  ">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <div>
                  <User2 size={18} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col items-start flex-1 ml-2 text-sm">
                  <span className="font-medium leading-none">
                    {session?.user?.name}
                  </span>
                  <span className="text-[11px] text-zinc-500 leading-none mt-1.5">
                    Free Plan
                  </span>
                </div>
                <ChevronUp className="ml-auto size-4 text-zinc-400" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              side="top"
              align="end"
              className="w-[--radix-popper-anchor-width] mb-2 p-2 shadow-sm border-zinc-100 dark:border-zinc-800 space-y-1"
            >
              <DropdownMenuLabel className="text-xs text-zinc-500 font-normal px-2 py-1.5">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href={"/settings"}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                variant="destructive"
                className="cursor-pointer"
                asChild
              >
                <LogoutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default SidebarFooterUser;
