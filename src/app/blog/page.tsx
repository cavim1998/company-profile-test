"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

type BlogPost = {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
}

const BlogListPage = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulasi fetch dari backendless
    setTimeout(() => {
      setBlogs([
        {
          id: 1,
          title: "The Future of Urban Mobility in Southeast Asia",
          excerpt:
            "Exploring how Grab continues to drive innovation and sustainability in transportation.",
          author: "Grab Tech Team",
          date: "October 22, 2025",
        },
        {
          id: 2,
          title: "Building Seamless Payment Experiences",
          excerpt:
            "A closer look at GrabPay’s journey to make everyday transactions simpler and faster.",
          author: "Fintech Team",
          date: "September 18, 2025",
        },
        {
          id: 3,
          title: "Empowering Small Businesses Across Indonesia",
          excerpt:
            "Learn how Grab helps empower local entrepreneurs through digital inclusion.",
          author: "Grab Indonesia",
          date: "August 30, 2025",
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Blog</h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay updated with the latest stories, insights, and innovations from Grab.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="shadow-md border">
                  <CardContent className="p-6 space-y-4">
                    <Skeleton className="h-6 w-3/4 mx-auto" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-8 w-32 mx-auto" />
                  </CardContent>
                </Card>
              ))
            : blogs.map((blog) => (
                <Card key={blog.id} className="shadow-md border hover:shadow-lg transition">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-800">
                      {blog.title}
                    </CardTitle>
                    <p className="text-sm text-gray-500 mt-1">
                      By {blog.author} • {blog.date}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                    <Link href={`/blog/${blog.id}`}>
                      <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </section>
  )
}

export default BlogListPage
