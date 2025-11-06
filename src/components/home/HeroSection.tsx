"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-[756px] flex items-center justify-center text-white">
      <Image
        src='/images/hero-section.jpg'
        alt='Grab Hero'
        className="object-cover object-center z-0"
        fetchPriority="high"
        fill
        priority
      />
      <div className="absolute">
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
      </div>
    </section>
  )
}
