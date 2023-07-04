import { create } from "zustand";
import Drink from "Frontend/generated/com/lpw/getfed/models/Drink.js";
import Meal from "Frontend/generated/com/lpw/getfed/models/Meal.js";

type State = {
  drinks: Drink[] | [];
  meals: Meal[] | [];
};

type Action = {
  addMeal: (meal: Meal) => void;
  removeMeal: (id: number) => void;
  removeDrink: (id: number) => void;
  addDrink: (drink: Drink) => void;
};

export const useCartStore = create<State & Action>((set) => ({
  drinks: [],
  meals: [],
  removeMeal: (id: number) =>
    set((state) => ({
      meals: state.meals.filter((meal) => meal.id !== id),
    })),
  removeDrink: (id: number) =>
    set((state) => ({
      drinks: state.drinks.filter((drink) => drink.id !== id),
    })),
  addMeal: (meal: Meal) =>
    set((state) => ({
      meals: [...state.meals, meal],
    })),
  addDrink: (drink: Drink) =>
    set((state) => ({
      drinks: [...state.drinks, drink],
    })),
}));
