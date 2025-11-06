"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[324px] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <Image
          src='/images/about-us.jpg'
          alt='Grab About Us'
          className="object-cover object-center z-0"
          fetchPriority="high"
          fill
          priority
        />
        <div className="absolute">
          <h1 className="text-4xl font-bold text-black mb-4">
            Driving Indonesia Forward, Together.
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Grab is more than just a super app — we’re a movement empowering people, businesses,
            and communities through technology.
          </p>
          <Button className="bg-[#00b14f] text-white rounded-full px-6 py-3 hover:bg-[#009444]">
            Explore Our Mission
          </Button>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-[#00b14f] mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Since 2014, Grab Indonesia has been transforming how millions of people move, eat,
            and earn. From rides and deliveries to financial inclusion, we continue to innovate
            to support local communities and the Indonesian economy.
          </p>
        </div>
        <Image
          src="/images/our-story.jpg"
          alt="Grab Indonesia operations"
          width={600}
          height={400}
          className="rounded-xl shadow-md"
        />
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#e6f7ef] py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-[#00b14f] mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To drive Southeast Asia forward by creating economic empowerment for everyone.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#00b14f] mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To create technology that makes everyday life better — from mobility to food, to
              payments.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Empowerment", desc: "Helping partners grow and succeed." },
            { title: "Innovation", desc: "Creating solutions that matter." },
            { title: "Integrity", desc: "Doing the right thing, every time." },
            { title: "Collaboration", desc: "Growing stronger together." },
          ].map((item, index) => (
            <Card key={index} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="text-center p-6 space-y-3">
                <Image
                  src={`/icons/value-${index + 1}.svg`}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="mx-auto"
                />
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Impact in Indonesia */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Impact in Indonesia</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { number: "10M+", label: "Daily Transactions" },
            { number: "500K+", label: "Driver Partners" },
            { number: "1M+", label: "MSMEs Empowered" },
            { number: "100+", label: "Cities Served" },
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold text-[#00b14f]">{stat.number}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-semibold mb-6">Be Part of Grab’s Journey</h2>
        <div className="flex justify-center gap-4">
          <Button className="bg-[#00b14f] text-white rounded-full px-6 py-3 hover:bg-[#009444]">
            Join as Partner
          </Button>
          <Button variant="outline" className="rounded-full px-6 py-3 border-[#00b14f] text-[#00b14f]">
            Contact Us
          </Button>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
