import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "../_components/Navbar";
import { SonnerToaster } from "../_components/SonnerToaster";
import FloatingTimer from "./pomodoro/_components/FloatingTimer";
import TimerController from "./pomodoro/_components/TimerController";
import Azkar from "./_components/Azkar";
import DhikrProvider from "@/providers/DhikrProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <DhikrProvider />
      <FloatingTimer />
      <TimerController />
      <SonnerToaster />
      <AppSidebar />
      <Azkar />
      <div className={`flex flex-col w-full relative`}>
        <Navbar />
        <main className={`p-6 min-h-[calc(100vh-48px)]`}>{children}</main>
      </div>
    </SidebarProvider>
  );
}
