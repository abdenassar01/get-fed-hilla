import { DrinkItem, MealItem } from "Frontend/types/types.js";

export function getUniqueListBy(
  arr: (MealItem | DrinkItem)[]
): (MealItem | DrinkItem)[] {
  return Object.values(
    arr.reduce((a, item) => {
      // @ts-ignore
      a[item.item.id] = item;
      return a;
    }, {})
  );
}
