import { auth } from "@/auth";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav
      className={`bg-sidebar w-full h-12 px-5 border border-l-0 flex items-center justify-between`}
    >
      <SidebarTrigger />

      <div className={`flex justify-end items-center gap-4`}>
        <ThemeToggle />

        <Link href={"/settings"}>
          <Image
            className={`rounded-full cursor-pointer`}
            src={session?.user?.image || ""}
            alt="user image"
            width={28}
            height={28}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
