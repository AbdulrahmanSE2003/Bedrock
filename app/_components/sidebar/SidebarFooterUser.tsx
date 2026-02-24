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
import Image from "next/image";

const SidebarFooterUser = async () => {
  const session = await auth();
  return (
    <SidebarFooter className="pb-4">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <div>
                  {/* <User2 size={18} strokeWidth={1.5} /> */}
                  <Image
                    className={`rounded-full`}
                    src={session?.user?.image || ""}
                    alt="user image"
                    width={28}
                    height={28}
                  />
                </div>
                <div className="flex flex-col items-start flex-1 ml-2 text-sm">
                  <span className="font-medium leading-none">Abdulrahman</span>
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
              className="w-[--radix-popper-anchor-width] mb-2 p-2 shadow-sm border-zinc-100 dark:border-zinc-800"
            >
              <DropdownMenuLabel className="text-xs text-zinc-500 font-normal px-2 py-1.5">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuItem className="cursor-pointer">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                variant="destructive"
                className="cursor-pointer"
              >
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default SidebarFooterUser;
