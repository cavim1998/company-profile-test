"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const CreateBlogPage = () => {
  const router = useRouter()

  // Simulasi user login
  const isLoggedIn = true // nanti diganti dengan auth check dari Backendless

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isLoggedIn) {
      router.push("/login")
      return
    }

    setIsSubmitting(true)

    // Simulasi kirim data ke Backendless
    setTimeout(() => {
      console.log({
        title,
        content,
        tags,
      })

      setIsSubmitting(false)
      alert("Blog successfully created!")
      router.push("/blog")
    }, 1000)
  }

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Create New Blog</h1>

        <Card className="w-full max-w-2xl shadow-md border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-700">Blog Details</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter blog title"
                  value={title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="Write your blog content here..."
                  rows={6}
                  value={content}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  placeholder="e.g. tech, innovation"
                  value={tags}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTags(e.target.value)}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg"
              >
                {isSubmitting ? "Submitting..." : "Publish Blog"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CreateBlogPage
