'use client'

import { useEffect } from 'react'
import { useParams } from "next/navigation"
import { useBlog } from "@/stores/Blog"
import Image from "next/image"
import moment from "moment"

const BlogDetailPage = () => {
  const params = useParams()
  const storeBlog = useBlog()
  const detailBlog = storeBlog.detailBlog

  useEffect(() => {
    storeBlog.getBlogsDetail(params.id as string)
  }, [])

  if (!detailBlog) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-gray-500">Loading blog details...</p>
      </main>
    )
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
        <Image
          src={detailBlog.thumbnail && detailBlog.thumbnail !== '.' ? detailBlog.thumbnail : 'https://picsum.photos/360/240'}
          alt={detailBlog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{detailBlog.title}</h1>
      <div className="flex items-center gap-3 mb-6 text-sm text-gray-500">
        <span>By {detailBlog.author}</span>
        <span>•</span>
        <span>{moment(detailBlog.created).format('MMMM DD, YYYY')}</span>
      </div>

      <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <div
          dangerouslySetInnerHTML={{ __html: detailBlog.content }}
        />
      </article>
    </main>
  )
}

export default BlogDetailPage
