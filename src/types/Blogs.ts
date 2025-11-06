export interface BlogTypes {
  search: string
  list: ListBlogsTypes[]
  detailBlog: ListBlogsTypes | null
  errorApi: string
  isLoading: boolean
  setSearch: (value: string) => void
  getBlogs: () => void
  getBlogsDetail: (id: string) => void
  postArticle: (data: ParamsArticle) => void
}

export interface ListBlogsTypes {
  thumbnail: string
  created: number
  author: string
  description: string
  category: string
  title: string
  ownerId: string
  updated: number
  objectId: string
  content: string
}

export interface ParamsArticle {
  title: string
  category: string
  content: string
  description: string
  thumbnail: string
  author: string
}

export type BackendlessError = {
  code: number
  message: string
}

export type BackendlessObject = {
  objectId: string
  created?: number
  updated?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}