import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Logo />
      <h1 className="mt-8 text-5xl font-bold text-black">
        Your calm command center
      </h1>
      <p className="mt-4 text-xl text-gray-600">Coming soon.</p>
      <Button asChild className={`mt-3`}>
        <Link href={"/dashboard"}>Go to Dashboard</Link>
      </Button>
    </main>
  );
}
