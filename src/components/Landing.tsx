"use client";

import { useEffect, useState } from "react";
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

export default function Landing() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [shapes, setShapes] = useState<Array<Shape>>([]);

  const currentText = rotatingTexts[index];
  const letters = currentText.split("");

  useEffect(() => {
    if (phase === "in") {
      // Tunggu sampai semua huruf muncul, lalu mulai animasi out
      const delay = 4000 + letters.length * 50;
      const timer = setTimeout(() => {
        setPhase("out");
      }, delay);
      return () => clearTimeout(timer);
    } else {
      // Setelah semua huruf keluar, ganti ke kalimat berikutnya
      const delay = letters.length * 50 + 1000;
      const timer = setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingTexts.length);
        setPhase("in");
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [phase, index]);

  useEffect(() => {
    setShapes(generateShapes(5));
  }, []);

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

  const generateShapes = (count: number) => {
    const shapes = [];
    for (let i = 0; i < count; i++) {
      const size = 150;
      const top = Math.random() * 90;
      const left = Math.random() * 90;
      const isCircle = Math.random() > 0.5;
      const color = Math.random() > 0.5 ? "bg-violet-900" : "bg-rose-900";
      const fromTop = top + (Math.random() * 40 - 20);
      const fromLeft = left + (Math.random() * 40 - 20);
      shapes.push({
        id: i,
        size,
        top,
        left,
        fromTop,
        fromLeft,
        isCircle,
        color,
      });
    }
    return shapes;
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 backdrop-blur-xs bg-opacity-50 bg-gradient-to-br from-purple-800 via-black to-blue-800 z-0" />

      {/* Moving Shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          initial={{
            top: `${shape.fromTop}%`,
            left: `${shape.fromLeft}%`,
          }}
          animate={{
            top: `${shape.top}%`,
            left: `${shape.left}%`,
          }}
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

      {/* Text Flip In/Out */}
      <div className="z-10 flex justify-center items-center h-full text-2xl sm:text-3xl md:text-4xl text-center px-4 font-bold relative">
        <span className="absolute flex gap-[2px] flex-wrap justify-center">
          {letters.map((char, i) => {
            const delay =
              phase === "in" ? i * 0.05 : (letters.length - 1 - i) * 0.05; // reverse delay only
            const indexKey = i;
            return (
              <motion.span
                key={`${index}-${indexKey}-${phase}`}
                initial={{
                  rotateY: phase === "in" ? 90 : 0,
                  opacity: phase === "in" ? 0 : 1,
                }}
                animate={{
                  rotateY: phase === "in" ? 0 : 90,
                  opacity: phase === "in" ? 1 : 0,
                }}
                transition={{
                  duration: 0.4,
                  delay,
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
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
