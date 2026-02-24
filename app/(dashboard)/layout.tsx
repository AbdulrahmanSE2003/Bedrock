import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className={`flex flex-col w-full`}>
        <nav className={`bg-muted-foreground w-full h-6`}>
          <SidebarTrigger />
        </nav>
        <main className={`p-6`}>
          {children}
          <ThemeToggle />
        </main>
      </div>
    </SidebarProvider>
  );
}
