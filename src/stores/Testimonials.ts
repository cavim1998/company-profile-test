import { create } from 'zustand'
import {
  TestimonialsTypes,
  UserTestimonials
} from '@/types/Testimonials'
import axios from 'axios'

export const useTestimonials = create<TestimonialsTypes>((set) => ({
  listUsers: [],
  getUsers: async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?page=1&results=3')

      const results = [] as UserTestimonials[]
      const listMessage = [
        "Grab has changed the way I move around the city — it’s fast, safe, and always reliable!",
        "GrabFood helps me enjoy my favorite meals without leaving home. Super convenient!",
        "With GrabExpress, my packages reach customers quickly. It helps my small business grow!"
      ]
      for (const user of response.data.results) {
        results.push({
          ...user,
          message: listMessage[0]
        })
        listMessage.shift()
      }
      set({listUsers: results})
    } catch (error) {
      console.log(error)
    }
  }
}))