import { create } from "zustand";
import Drink from "Frontend/generated/com/lpw/getfed/models/Drink.js";
import Meal from "Frontend/generated/com/lpw/getfed/models/Meal.js";
import { DrinkItem, MealItem } from "Frontend/types/types.js";

type State = {
  drinks: DrinkItem[] | [];
  meals: MealItem[] | [];
};

type Action = {
  addMeal: (meal: Meal) => void;
  removeMeal: (id: number) => void;
  removeDrink: (id: number) => void;
  addDrink: (drink: Drink) => void;
  reset: () => void;
};

export const useCartStore = create<State & Action>((set) => ({
  drinks: [],
  meals: [],
  removeMeal: (id: number) =>
    set((state) => ({
      meals: state.meals.filter((meal) => meal.item.id !== id),
    })),

  reset: () =>
    set((state) => ({
      meals: [],
      drinks: [],
    })),
  removeDrink: (id: number) =>
    set((state) => ({
      drinks: state.drinks.filter((drink) => drink.item.id !== id),
    })),
  addMeal: (meal: Meal) =>
    set((state) => ({
      meals: [
        ...state.meals,
        {
          item: meal,
          qte: ++state.meals.filter((mealItem) => mealItem.item.id === meal.id)
            .length,
        },
      ],
    })),
  addDrink: (drink: Drink) =>
    set((state) => ({
      drinks: [
        ...state.drinks,
        {
          item: drink,
          qte: ++state.drinks.filter(
            (drinkItem) => drinkItem.item.id === drink.id
          ).length,
        },
      ],
    })),
}));
