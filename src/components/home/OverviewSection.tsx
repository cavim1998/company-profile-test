"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function OverviewSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <Image
            src="/images/who-we-are-section.jpg"
            alt="Grab Indonesia Office"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Grab Indonesia is part of Southeast Asia’s leading super app, transforming
            the way people move, eat, and pay. We empower everyday Indonesians by
            connecting them with safe, affordable, and efficient services across the country.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Founded in 2012</li>
            <li>Operating in 8 countries</li>
            <li>Millions of drivers, merchants, and partners</li>
          </ul>
          <Link href="/about">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Discover More About Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
