"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const Navbar = () => {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)
  const [tokenUser, setTokenUser] = useState<string>('')

  useEffect(() => {
    queueMicrotask(() => {
      const token = localStorage.getItem('token')
      setTokenUser(token || '')
    })
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Teams", href: "/teams" },
    { label: "Blog", href: "/blog" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/grab-logo.svg"
            alt="Grab Logo"
            width={60}
            height={60}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-[#00B14F]"
                  : "text-gray-600 hover:text-[#00B14F]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Login Button (Desktop Only) */}
        <div className="hidden md:block">
          {
            !tokenUser ?
            <Link href="/login">
              <Button
                variant="outline"
                className="rounded-full border-[#00B14F] text-[#00B14F] hover:bg-[#00B14F] hover:text-white transition"
              >
                Login
              </Button>
            </Link> :
            
            <Link href="/blog/create">
              <Button
                variant="outline"
                className="rounded-full border-[#00B14F] text-[#00B14F] hover:bg-[#00B14F] hover:text-white transition"
              >
                Create Blog
              </Button>
            </Link>
          }
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-gray-800" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium ${
                pathname === item.href
                  ? "text-[#00B14F]"
                  : "text-gray-700 hover:text-[#00B14F]"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {
            !tokenUser ?
            <Link href="/login" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-[#00B14F] text-white rounded-full hover:bg-[#009444] transition">
                Login
              </Button>
            </Link> :

            <Link href="/blog/create" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-[#00B14F] text-white rounded-full hover:bg-[#009444] transition">
                Create Blog
              </Button>
            </Link>
          }
        </div>
      )}
    </nav>
  )
}

export default Navbar
