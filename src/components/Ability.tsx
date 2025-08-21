"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const abilities = [
  {
    title: "CMS Editor with WordPress",
    description:
      "Experienced in managing content, building layouts, and optimizing performance using WordPress CMS.",
  },
  {
    title: "Frontend Development",
    description:
      "Proficient in building responsive, accessible, and visually appealing user interfaces using React and TailwindCSS.",
  },
  {
    title: "Backend Integrations",
    description:
      "Capable of connecting frontend apps with REST APIs, handling authentication, and integrating third-party services.",
  },
];

const createFloatVariant = (x: number, y: number, duration: number) => ({
  animate: {
    x: [0, x, -x, 0],
    y: [0, -y, y, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

const FloatingShape = ({
  className,
  variant,
}: {
  className: string;
  variant: any;
}) => <motion.div className={className} variants={variant} animate="animate" />;

const AbilityCard = ({
  title,
  description,
  delay,
}: {
  title: string;
  description: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
  >
    <Card className="bg-white/10 text-white backdrop-blur-sm border-white/20 border shadow-xl hover:scale-105 transition-transform">
      <CardHeader>
        <CheckCircle className="w-10 h-10 text-rose-500 mb-2" />
        <CardTitle className="text-xl text-start">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white/80 text-start">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export default function Ability() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-black to-blue-800 text-white py-20 px-6 overflow-hidden">
      {/* Floating background shapes */}
      <FloatingShape
        className="absolute top-10 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-md"
        variant={createFloatVariant(20, 40, 10)}
      />
      <FloatingShape
        className="absolute bottom-20 left-1/4 w-36 h-36 bg-blue-500/20 rounded-full blur-md"
        variant={createFloatVariant(30, 30, 12)}
      />
      <FloatingShape
        className="absolute top-40 right-10 w-48 h-48 bg-white/10 rounded-full blur-md"
        variant={createFloatVariant(50, 25, 14)}
      />
      <FloatingShape
        className="absolute bottom-10 right-1/4 w-40 h-40 bg-pink-400/20 rounded-full blur-md"
        variant={createFloatVariant(20, 50, 11)}
      />

      {/* Content */}
      <div className="relative max-w-6xl w-full text-center z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-14"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What I Can Do
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3 px-4">
          {abilities.map((item, index) => (
            <AbilityCard
              key={index}
              title={item.title}
              description={item.description}
              delay={0.3 + index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
