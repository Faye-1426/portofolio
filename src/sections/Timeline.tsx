"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { timelineItems } from "@/data/timeline";

export default function TimelineSection() {
  return (
    <div className="w-full py-20 bg-gradient-to-bl from-blue-800 via-black to-purple-800 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          My Timeline
        </motion.h2>

        <div className="relative">
          {/* Vertical center line */}
          <div className="block absolute left-1/2 top-0 w-1 h-full bg-white/20 transform -translate-x-1/2 z-0" />

          <div className="space-y-16">
            {timelineItems.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  className={cn(
                    "w-full flex",
                    isLeft ? "justify-end" : "justify-start"
                  )}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="relative w-full max-w-md z-10">
                    <Card className="bg-white/10 border-white/20 border text-white backdrop-blur-md">
                      <CardHeader>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-sm text-white/70">{item.year}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-white/90">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>

                    {/* Bullet point on the line */}
                    <span
                      className={cn(
                        "absolute w-4 h-4 bg-purple-500 rounded-full top-6",
                        isLeft
                          ? "hidden md:block -left-12"
                          : "hidden md:block -right-12"
                      )}
                    />
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
