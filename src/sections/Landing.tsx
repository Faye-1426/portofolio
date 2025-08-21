"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const rotatingTexts = [
  "A Frontend Developer",
  "Passionate In Developing Web and Applications",
  "Eager To Learn About Technology",
];

type Shape = {
  id: number;
  size: number;
  isCircle: boolean;
  color: string;
  top: number;
  left: number;
  fromTop: number;
  fromLeft: number;
};

const generateShapes = (count: number): Shape[] => {
  return Array.from({ length: count }, (_, i) => {
    const size = 150;
    const top = Math.random() * 90;
    const left = Math.random() * 90;
    const fromTop = top + (Math.random() * 40 - 20);
    const fromLeft = left + (Math.random() * 40 - 20);
    const isCircle = Math.random() > 0.5;
    const color = Math.random() > 0.5 ? "bg-violet-900" : "bg-rose-900";

    return {
      id: i,
      size,
      top,
      left,
      fromTop,
      fromLeft,
      isCircle,
      color,
    };
  });
};

export default function Landing() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [shapes, setShapes] = useState<Shape[]>([]);

  const currentText = rotatingTexts[index];
  const letters = useMemo(() => currentText.split(""), [currentText]);

  // Rotate text animation logic
  useEffect(() => {
    const delay =
      phase === "in" ? 4000 + letters.length * 50 : letters.length * 50 + 1000;
    const timer = setTimeout(() => {
      if (phase === "in") setPhase("out");
      else {
        setIndex((prev) => (prev + 1) % rotatingTexts.length);
        setPhase("in");
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [phase, index, letters.length]);

  // Initial shape generation
  useEffect(() => {
    setShapes(generateShapes(5));
  }, []);

  // Animate shapes every 7s
  useEffect(() => {
    const interval = setInterval(() => {
      setShapes((prevShapes) =>
        prevShapes.map((shape) => ({
          ...shape,
          top: Math.random() * 90,
          left: Math.random() * 90,
        }))
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const renderLetters = useCallback(() => {
    return letters.map((char, i) => {
      const delay = phase === "in" ? i * 0.05 : (letters.length - 1 - i) * 0.05;
      return (
        <motion.span
          key={`${index}-${i}-${phase}`}
          initial={{
            rotateY: phase === "in" ? 90 : 0,
            opacity: phase === "in" ? 0 : 1,
          }}
          animate={{
            rotateY: phase === "in" ? 0 : 90,
            opacity: phase === "in" ? 1 : 0,
          }}
          transition={{ duration: 0.4, delay }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      );
    });
  }, [letters, phase, index]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 backdrop-blur-xs bg-opacity-50 bg-gradient-to-br from-purple-800 via-black to-blue-800 z-0" />

      {/* Floating Background Shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          initial={{ top: `${shape.fromTop}%`, left: `${shape.fromLeft}%` }}
          animate={{ top: `${shape.top}%`, left: `${shape.left}%` }}
          transition={{ duration: 5, ease: "easeInOut" }}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            position: "absolute",
          }}
          className={cn(
            "opacity-30 blur-lg",
            shape.color,
            shape.isCircle ? "rounded-full" : "rounded-2xl"
          )}
        />
      ))}

      {/* Rotating Text */}
      <div className="z-10 flex justify-center items-center h-full text-2xl sm:text-3xl md:text-4xl text-center px-4 font-bold relative">
        <span className="absolute flex gap-[2px] flex-wrap justify-center">
          {renderLetters()}
        </span>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="60"
            height="80"
            viewBox="0 0 60 80"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M30 0 C10 10, 10 30, 30 40 C50 50, 50 70, 30 75"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M25 65 L30 75 L35 65"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
