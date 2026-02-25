import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "../_components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <div className={`flex flex-col w-full relative`}>
        <Navbar />
        <main className={`p-6 h-[calc(100vh-48px)]`}>{children}</main>
      </div>
    </SidebarProvider>
  );
}
