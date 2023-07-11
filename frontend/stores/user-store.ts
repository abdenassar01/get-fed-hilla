import User from "Frontend/generated/com/lpw/getfed/models/User.js";
import { create } from "zustand";

type State = {
  user: User | {};
};

type Action = {
  setUser: (user: User) => void;
};

export const useUserStore = create<State & Action>((set) => ({
  user: {},
  setUser: (user: User) =>
    set((state) => ({
      user: user,
    })),
}));
