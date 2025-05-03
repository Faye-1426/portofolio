"use client";

import About from "@/components/About";
import Landing from "@/components/Landing";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import TechStackSection from "@/components/TechStack";
import Timeline from "@/components/Timeline";

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      className="overflow-x-hidden overflow-y-clip"
    >
      <motion.div
        className="pointer-events-none fixed z-50 w-32 h-32 rounded-full bg-gradient-to-br from-rose-500 to-violet-600 opacity-40 blur-xl"
        animate={{ x: cursorPos.x - 64, y: cursorPos.y - 64 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
      <Landing />
      <About />
      <TechStackSection />
      <Timeline />
    </div>
  );
}
