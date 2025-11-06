export interface UserTypes {
  dataUser: UserDataTypes
  isLoading: boolean
  callSingIn: (data: ParamSignIn) => void
  callCurrentUser: () => void
}

export interface ParamSignIn {
  login: string
  password: string
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

export interface UserDataTypes {
  created: number
  ownerId: string
  name: string
  "user-token": string
  updated: number
  objectId: string
  email: string
}