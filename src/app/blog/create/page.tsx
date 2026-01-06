"use client";

import { useEffect } from "react";
import { useBlog } from "@/stores/Blog";
import { useUser } from "@/stores/Users";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  title: z.string().min(10, "Title must be at least 10 characters"),
  category: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Title must be at least 10 characters"),
  content: z.string().min(10, "Title must be at least 10 characters"),
  thumbnail: z.string().min(10, "Title must be at least 1 characters"),
});

const CreateBlogPage = () => {
  const router = useRouter();
  const storeBlog = useBlog();
  const storeUser = useUser();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const makeArticle = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await storeBlog.postArticle({
        ...data,
        author: storeUser.dataUser.name,
      });
      if (response !== undefined) {
        alert("Success Create Article");
        router.push("/blog");
      } else {
        alert("Invalid Data");
      }
    } catch (error) {
      alert("Failed Create Article");
    }
  };

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Create New Blog
        </h1>

        <Card className="w-full max-w-2xl shadow-md border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-700">
              Blog Details
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit(makeArticle)}>
              <div className="space-y-3">
                <Label>Title</Label>
                <Input {...register("title")} placeholder="Title" type="text" />
                {errors.title ? (
                  <p className="text-sm text-red-500">{errors.title.message}</p>
                ) : null}
              </div>

              <div className="space-y-3">
                <Label>Category</Label>
                <Input
                  {...register("category")}
                  placeholder="Category"
                  type="text"
                />
                {errors.category ? (
                  <p className="text-sm text-red-500">
                    {errors.category.message}
                  </p>
                ) : null}
              </div>

              <div className="space-y-3">
                <Label>Short Description</Label>
                <Input
                  {...register("description")}
                  placeholder="Short Description"
                  type="text"
                />
                {errors.description ? (
                  <p className="text-sm text-red-500">
                    {errors.description.message}
                  </p>
                ) : null}
              </div>

              <div className="space-y-3">
                <Label>Content</Label>
                <Textarea
                  {...register("content")}
                  placeholder="Write your blog content here..."
                  rows={6}
                />
                {errors.content ? (
                  <p className="text-sm text-red-500">
                    {errors.content.message}
                  </p>
                ) : null}
              </div>

              <div className="space-y-3">
                <Label>Thumbnail</Label>
                <Input
                  {...register("thumbnail")}
                  placeholder="Thumbnail"
                  type="text"
                />
                {errors.thumbnail ? (
                  <p className="text-sm text-red-500">
                    {errors.thumbnail.message}
                  </p>
                ) : null}
              </div>

              <Button
                disabled={storeBlog.isLoading}
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg">
                {storeBlog.isLoading ? "Submitting..." : "Publish Blog"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CreateBlogPage;
