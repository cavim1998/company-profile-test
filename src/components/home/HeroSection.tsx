"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-[url('/images/hero-section.jpg')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black/50" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-2xl px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empowering Everyday Journeys Across Indonesia
        </h1>
        <p className="text-lg mb-6">
          Grab connects millions of Indonesians with smarter transportation, food delivery, and digital services.
        </p>
        <div className="space-x-3">
          <Link href="/about">
            <Button variant="secondary" className="bg-green-600 text-white hover:bg-green-700">
              Learn More
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" className="text-white border-white bg-black hover:bg-white/10">
              See Our Services
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
