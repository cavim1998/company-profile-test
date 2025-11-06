import { create } from 'zustand'
import { BackendlessError, BackendlessObject, BlogTypes, ListBlogsTypes } from '@/types/Blogs'
import axios, { AxiosResponse } from 'axios'

export const useBlog = create<BlogTypes>((set, get) => ({
  search: '',
  list: [],
  detailBlog: null,
  errorApi: '',
  isLoading: false,
  setSearch: (value) => {
    set({ search: value })
  },
  getBlogs: () => {
    set({ isLoading: true, list: [] })
    const { search } = get()
    const searchUrl = `title LIKE '%${search}%'`
    const defaultParams = `sortBy=%60created%60%20desc`
    const url = !search ?
      `https://deluxedirt-us.backendless.app/api/data/Blogs?${defaultParams}` :
      `https://deluxedirt-us.backendless.app/api/data/Blogs?${defaultParams}&where=${encodeURIComponent(searchUrl)}`
    axios.get(url)
      .then((response) => {
        set({ list: response.data })
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          set({ errorApi: error.message })
        } else {
          set({ errorApi: 'Unknown error' })
        }
      })
      .finally(() => {
        set({ isLoading: false })
      })
  },
  getBlogsDetail: async (id) => {
    set({ isLoading: true, detailBlog: null })
    axios.get(`https://deluxedirt-us.backendless.app/api/data/Blogs/${id}`)
      .then((response) => {
        set({ detailBlog: response.data })
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          set({ errorApi: error.message })
        } else {
          set({ errorApi: 'Unknown error' })
        }
      })
      .finally(() => {
        set({ isLoading: false })
      })
  },
  postArticle: async (data) => {
    try {
      set({ isLoading: true })
      const response: AxiosResponse<BackendlessError | BackendlessObject> = await axios.post('https://deluxedirt-us.backendless.app/api/data/Blogs', {
        ...data
      })
      return response.data
    } catch (error) {
      console.log(error)
    } finally {
      set({ isLoading: false })
    }
  },
}))