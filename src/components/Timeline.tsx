// components/TimelineSection.tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const timelineItems = [
  {
    year: "2023",
    title:
      "Started the Programming Journey at National IT Competition 'Web Design' Informatics Vocational Festival (INVOFEST)",
    description:
      "Began with React, TailwindCSS and GSAP, Built simple static website with animation",
  },
  {
    year: "2023",
    title:
      "Continue to Learn and Practice at the East Jakarta LKS Competition.",
    description: "Created Simple API Model",
  },
  {
    year: "2024",
    title: "Started Internship Program at PT. Anggada Duta Wisesa",
    description: "Manage a Java Application with Springboot",
  },
  {
    year: "2025",
    title: "Worked on Freelance Projects at RAF-Studio",
    description:
      "Developed a responsive and user-friendly website using WordPress and Elementor.",
  },
];

export default function Timeline() {
  return (
    <div className="w-full py-20 bg-gradient-to-bl from-blue-800 via-black to-purple-800 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">My Timeline</h2>
        <div className="relative">
          {/* Vertical line always visible */}
          <div className="block absolute left-1/2 top-0 w-1 h-full bg-white/20 transform -translate-x-1/2" />
          <div className="space-y-16">
            {timelineItems.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  className={cn(
                    "w-full flex px-4",
                    isLeft ? "justify-end" : "justify-start"
                  )}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="relative max-w-md w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/80 mb-2">{item.year}</p>
                    <p className="text-sm text-white/90">{item.description}</p>

                    {/* Bullet point only on desktop */}
                    <span
                      className={cn(
                        "absolute w-4 h-4 bg-purple-500 rounded-full top-6",
                        isLeft
                          ? "hidden md:block -left-8"
                          : "hidden md:block -right-8"
                      )}
                    />

                    {/* Hidden on all screen (no bullet in center for mobile) */}
                    <span className="hidden" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
