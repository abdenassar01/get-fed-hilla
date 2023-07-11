import User from "Frontend/generated/com/lpw/getfed/models/User.js";
import { create } from "zustand";

type State = {
  user: User;
  authenticated: boolean;
};

type Action = {
  setUser: (user: User) => void;
  setAuthenticated: (status: boolean) => void;
};

export const useUserStore = create<State & Action>((set) => ({
  user: {},
  authenticated: false,
  setUser: (user: User) =>
    set((state) => ({
      user: user,
    })),
  setAuthenticated: (status: boolean) =>
    set((state) => ({
      authenticated: status,
    })),
}));
