"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useTestimonials } from "@/stores/Testimonials"
import { useEffect } from "react"

const testimonials = [
  {
    name: "Rina",
    city: "Jakarta",
    message:
      "Grab has changed the way I move around the city — it’s fast, safe, and always reliable!",
    image: "/images/testimonials/user1.jpg",
  },
  {
    name: "Budi",
    city: "Surabaya",
    message:
      "GrabFood helps me enjoy my favorite meals without leaving home. Super convenient!",
    image: "/images/testimonials/user2.jpg",
  },
  {
    name: "Sinta",
    city: "Bandung",
    message:
      "With GrabExpress, my packages reach customers quickly. It helps my small business grow!",
    image: "/images/testimonials/user3.jpg",
  },
]

export function TestimonialsSection() {
  const storeTestimonials = useTestimonials()

  useEffect(() => {
    storeTestimonials.getUsers()
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-gray-900"
        >
          What People Say About Grab
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {storeTestimonials.listUsers.map((user, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="p-6 rounded-2xl hover:shadow-lg transition-all bg-white">
                <CardHeader>
                  <div className="flex flex-col items-center space-y-3">
                    <Image
                      src={user.picture.large}
                      alt={user.name.first}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                    <h3 className="font-semibold text-gray-900">{user.name.first}</h3>
                    <p className="text-sm text-gray-500">{user.location.city}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">“{user.message}”</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
