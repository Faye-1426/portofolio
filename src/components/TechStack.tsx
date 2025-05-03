"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techStack = [
  { name: "React", icon: "/asset/tech/react.png" },
  { name: "Next.js", icon: "/asset/tech/nextjs.png" },
  { name: "Tailwind CSS", icon: "/asset/tech/tailwindcss.png" },
  { name: "TypeScript", icon: "/asset/tech/typescript.png" },
  { name: "JavaScript", icon: "/asset/tech/js.png" },
  { name: "Vite", icon: "/asset/tech/vite.png" },
  { name: "Wordpress", icon: "/asset/tech/wordpress.jpg" },
];

const duplicatedStack = [...techStack, ...techStack];

export default function TechStackSection() {
  return (
    <div className="w-full py-24 bg-gradient-to-br from-purple-800 via-black to-blue-800 text-white overflow-hidden">
      <div className="mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Tech Stack
        </h2>

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
              <div
                key={`${tech.name}-${i}`}
                className="flex flex-col items-center min-w-[120px] pt-2" // ✅ Tambahkan padding top
              >
                <div className="w-32 h-32 p-4 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={64}
                    height={64}
                  />
                </div>
                <span className="mt-3 text-sm text-center">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
