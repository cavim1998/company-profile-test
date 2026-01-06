import { create } from "zustand";
import {
  UserTypes,
  UserDataTypes,
  BackendlessError,
  BackendlessObject,
} from "@/types/Users";
import axios, { AxiosResponse } from "axios";

export const useUser = create<UserTypes>((set, get) => ({
  dataUser: {} as UserDataTypes,
  isLoading: false,
  callSingIn: async (data) => {
    try {
      set({ isLoading: true });
      const response: AxiosResponse<BackendlessError | BackendlessObject> =
        await axios.post(
          "https://deluxeyoke-us.backendless.app/api/users/login",
          {
            ...data,
          }
        );
      set({ dataUser: response.data as UserDataTypes });
      const { dataUser } = get();
      localStorage.setItem("userId", dataUser.objectId);
      localStorage.setItem("token", dataUser["user-token"]);
      return response.data;
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
  callCurrentUser: async () => {
    try {
      const tokenUser = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const response = await axios.get(
        `https://deluxeyoke-us.backendless.app/api/data/users/${userId}`,
        {
          headers: {
            "user-token": tokenUser,
          },
        }
      );
      set({ dataUser: response.data });
    } catch (error) {
      console.log(error);
    }
  },
}));
