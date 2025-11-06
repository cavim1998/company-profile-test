import { create } from 'zustand'
import {
  UserTypes,
  UserDataTypes,
  BackendlessError,
  BackendlessObject
} from '@/types/Users'
import axios, { AxiosResponse } from 'axios'

export const useUser = create<UserTypes>((set, get) => ({
  dataUser: {} as UserDataTypes,
  isLoading: false,
  callSingIn: async (data) => {
    try {
      set({ isLoading: true })
      const response: AxiosResponse<BackendlessError | BackendlessObject> = await axios.post('https://deluxedirt-us.backendless.app/api/users/login', {
        ...data
      })
      set({ dataUser: response.data as UserDataTypes })
      return response.data
    } catch (error) {
      console.log(error)
    } finally {
      set({ isLoading: false })
    }
  }
}))