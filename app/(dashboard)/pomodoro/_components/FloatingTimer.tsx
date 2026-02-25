"use client";

import { usePomodoroStore } from "@/store/usePomodoroStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const FloatingTimer = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathName = usePathname();
  const offset = useRef({ x: 0, y: 0 });
  const { minutes, seconds, tick, isActive } = usePomodoroStore();
  const timeDisplay = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  // Dragging Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);

    const rect = e.currentTarget.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  useEffect(() => {
    setMounted(true);

    let interval: any;
    if (isActive) {
      interval = setInterval(() => tick(), 1000);
    }
    return () => clearInterval(interval);
  }, [tick, isActive]);

  if (!mounted || pathName === "/pomodoro" || pathName === "/dashboard")
    return null;

  return (
    <div
      onMouseDown={handleMouseDown}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition:
          "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease",
        cursor: isDragging ? "grabbing" : "grab",
        touchAction: "none",
      }}
      className="fixed z-100 bg-background py-3 px-10 border border-foreground w-fit h-fit flex items-center justify-center rounded-xl shadow-lg select-none opacity-50  transition-opacity hover:opacity-100 duration-500"
    >
      <Link href={"/pomodoro"}>{timeDisplay}</Link>
    </div>
  );
};

export default FloatingTimer;
