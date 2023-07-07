import Meal from "Frontend/generated/com/lpw/getfed/models/Meal.js";
import Drink from "Frontend/generated/com/lpw/getfed/models/Drink.js";

export type MealItem = {
  item: Meal;
  qte: number;
};

export type DrinkItem = {
  item: Drink;
  qte: number;
};
