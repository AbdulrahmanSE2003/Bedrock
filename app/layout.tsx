import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "sonner";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Bedrock",
    template: "%s | Bedrock",
  },
  description:
    "Your personal life command center. Track habits, time, focus, and growth in one calm place.",
  keywords: [
    "productivity",
    "habit tracker",
    "pomodoro",
    "life dashboard",
    "personal os",
  ],
  icons: {
    icon: "/Logo.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bedrock",
    description: "Your personal life command center.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-black text-black dark:text-white`}
      >
        <Toaster />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
