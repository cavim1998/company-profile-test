"use client"

import { useUser } from '@/stores/Users'
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const formSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
})

const LoginPage = () => {
  const router = useRouter()
  const storeUser = useUser()

  const { register, handleSubmit, formState: {errors} } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  const handleLogin = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await storeUser.callSingIn({ login: data.email, password: data.password })
      if (response !== undefined) {
        alert('Success Sign In')
        router.push('/')
      } else {
        alert("Invalid email or password")
      }
    } catch (error) {
      alert('Failed Sign In')
    }
  }

  return (
    <section className="min-h-screen bg-white flex items-center justify-center py-20">
      <Card className="w-full max-w-md shadow-md border">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-gray-800">
            Login to Your Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
            <div className='space-y-3'>
              <Label>Email</Label>
              <Input {...register('email')} placeholder='Email' type="email" />
              {errors.email ? <p className="text-sm text-red-500">{errors.email.message}</p> : null}
            </div>

            <div className='space-y-3'>
              <Label>Password</Label>
              <Input {...register('password')} placeholder='Password' type="password" />
              {errors.password ? <p className="text-sm text-red-500">{errors.password.message}</p> : null}
            </div>

            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg"
              disabled={storeUser.isLoading}
            >
              { storeUser.isLoading ? 'Logging in...' : 'Login' }
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

export default LoginPage
