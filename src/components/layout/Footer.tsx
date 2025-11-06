import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid gap-10 md:grid-cols-3">
        {/* Company Info */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image
              src="/images/grab-logo.svg"
              alt="Grab Logo"
              width={60}
              height={60}
              priority
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Empowering everyday journeys across Indonesia through smarter
            transportation, delivery, and digital services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-green-400">About Us</Link></li>
            <li><Link href="/services" className="hover:text-green-400">Services</Link></li>
            <li><Link href="/teams" className="hover:text-green-400">Teams</Link></li>
            <li><Link href="/blog" className="hover:text-green-400">Blog</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 hover:text-green-400" />
            <Instagram className="w-5 h-5 hover:text-green-400" />
            <Linkedin className="w-5 h-5 hover:text-green-400" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Grab Indonesia Redesign. All rights reserved.
      </div>
    </footer>
  )
}
