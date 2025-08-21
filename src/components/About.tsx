"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <div
      className="w-full py-24 bg-gradient-to-bl from-blue-800 via-black to-purple-800 text-white"
      id="about"
    >
      <motion.div
        className="mx-auto px-6 md:px-12 lg:px-20"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 md:gap-12">
          {/* LEFT: Info */}
          <motion.div className="flex-1 space-y-6" variants={fadeInLeft}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              About Me
            </h2>
            <p className="text-base md:text-lg text-white/90">
              Hi, I’m a frontend developer passionate about creating clean,
              responsive, and user-focused web applications. I love turning
              ideas into interactive experiences, solving design and technical
              challenges along the way. With a strong attention to detail and a
              drive to keep learning, I aim to build products that are both
              functional and enjoyable to use.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#contact">
                <Button
                  variant="default"
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Contact Me
                </Button>
              </Link>
              <a href="/cv.pdf" download>
                <Button
                  variant="outline"
                  className="border-purple-400 text-purple-500 hover:bg-purple-900 hover:text-purple-100"
                >
                  Download CV
                </Button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Image */}
          <motion.div
            className="flex-1 flex justify-end"
            variants={fadeInRight}
          >
            <div className="relative w-[280px] h-[280px] md:w-[300px] md:h-[300px] rounded-full p-1 border border-violet-600 shadow-xl hover:scale-105 transition-transform duration-300">
              <Image
                src="/asset/img/img-1.jpg"
                alt="About Me"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
}
