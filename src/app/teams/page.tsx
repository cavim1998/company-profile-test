"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"

type User = {
  name: { first: string; last: string }
  picture: { large: string }
  email: string
  location: { country: string }
}

const TeamsPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://randomuser.me/api/?results=6")
        const data = await res.json()
        setUsers(data.results)
      } catch (error) {
        console.error("Failed to fetch users:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Team</h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet the people behind our success — passionate, creative, and driven to make a difference.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="shadow-md border">
                  <CardContent className="p-6 flex flex-col items-center">
                    <Skeleton className="h-24 w-24 rounded-full mb-4" />
                    <Skeleton className="h-4 w-32 mb-2" />
                    <Skeleton className="h-3 w-24" />
                  </CardContent>
                </Card>
              ))
            : users.map((user, index) => (
                <Card key={index} className="shadow-md border hover:shadow-lg transition">
                  <CardHeader className="flex flex-col items-center">
                    <Image
                      src={user.picture.large}
                      alt={user.name.first}
                      width={96}
                      height={96}
                      className="rounded-full mb-4 object-cover"
                    />
                    <CardTitle className="text-lg font-semibold">
                      {user.name.first} {user.name.last}
                    </CardTitle>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </CardHeader>
                  <CardContent className="text-center text-gray-600 text-sm">
                    <p>
                      Based in <span className="font-medium">{user.location.country}</span>. Passionate about
                      innovation and teamwork.
                    </p>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </section>
  )
}

export default TeamsPage
