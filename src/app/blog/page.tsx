"use client"

import { useEffect } from 'react'
import { useBlog } from "@/stores/Blog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import moment from 'moment'
import { Input } from '@/components/ui/input'

const BlogListPage = () => {
  const storeBlog = useBlog()

  useEffect(() => {
    storeBlog.getBlogs()
  }, [])

  const HandleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    storeBlog.setSearch(event.target.value)
  }

  const HandleKeySearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      storeBlog.getBlogs()
    }
  }

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Blog</h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay updated with the latest stories, insights, and innovations from Grab.
        </p>

        <div className='mb-12'>
          <Input placeholder="Search" onChange={HandleInputSearch} onKeyDown={HandleKeySearch} className="max-w-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storeBlog.isLoading
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
            : storeBlog.list.map((blog) => (
                <Card key={blog.objectId} className="shadow-md border hover:shadow-lg transition">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-800">
                      {blog.title}
                    </CardTitle>
                    <p className="text-sm text-gray-500 mt-1">
                      By {blog.author} • {moment(blog.created).format('MMMM DD, YYYY')}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                    <Link href={`/blog/${blog.objectId}`}>
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
