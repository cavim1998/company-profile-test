"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    title: "GrabTransport",
    desc: "Safe and reliable rides connecting millions across Indonesia.",
    icon: "🚗",
  },
  {
    title: "GrabFood",
    desc: "Delicious meals delivered fast from your favorite restaurants.",
    icon: "🍜",
  },
  {
    title: "GrabMart",
    desc: "Groceries and essentials delivered to your door in minutes.",
    icon: "🛒",
  },
  {
    title: "GrabExpress",
    desc: "Fast, affordable delivery for anything you need, anytime.",
    icon: "📦",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-gray-900"
        >
          Our Core Services
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="hover:shadow-xl transition-all rounded-2xl">
                <CardHeader>
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/services">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
