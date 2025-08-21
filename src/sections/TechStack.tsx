"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { techStack } from "@/data/techStack";

const duplicatedStack = [...techStack, ...techStack];

function TechCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex flex-col items-center pt-2">
      <Card className="bg-white/10 border-white/20 border shadow-md hover:scale-110 transition-transform duration-300 py-0">
        <CardContent className="w-32 h-32 flex items-center justify-center">
          <Image src={icon} alt={name} width={64} height={64} />
        </CardContent>
      </Card>
      <span className="mt-3 text-sm text-center text-white">{name}</span>
    </div>
  );
}

export default function TechStackSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-purple-800 via-black to-blue-800 text-white overflow-hidden">
      <div className="mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Tech Stack
        </motion.h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-16 w-max"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {duplicatedStack.map((tech, i) => (
              <TechCard
                key={`${tech.name}-${i}`}
                name={tech.name}
                icon={tech.icon}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
