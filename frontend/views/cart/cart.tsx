import * as React from "react";
import { useCartStore } from "Frontend/stores/cart-store.js";
import { Alert, Button, HeaderTitle } from "Frontend/common/index.js";
import { useEffect, useState } from "react";
import { DrinkItem, MealItem } from "Frontend/types/types.js";
import { MealCardWithQuantity } from "Frontend/common/dish-card/meal-card-with-quantity.js";
import { DrinkCardWithQuantity } from "Frontend/common/drink-card/drink-card-with-quantity.js";
import { getUniqueListBy } from "Frontend/utils/get-unique.js";

export default function Cart() {
  const { meals, drinks, removeMeal, removeDrink } = useCartStore();

  const [filteredMeals, setFilteredMeals] = useState<MealItem[]>([]);
  const [filteredDrinks, setFilteredDrinks] = useState<DrinkItem[]>([]);

  useEffect(() => {
    setFilteredMeals(getUniqueListBy(meals));
    setFilteredDrinks(getUniqueListBy(drinks));
  }, [meals, drinks]);

  return (
    <div className="bg-mainText bg-[url('https://i.imgur.com/D1FTJJD.png')] bg-no-repeat bg-cover min-h-[700px] flex flex-col items-center">
      <div className="my-12 py-6 w-[70vw] p-3 bg-white rounded-[8px] shadow-lg">
        <HeaderTitle title="My Cart" />
        {filteredMeals.length === 0 && filteredDrinks.length === 0 ? (
          <Alert message="You haven't added any item to you cart yet" />
        ) : (
          <div className="">
            <div className="font-bold text-xbase text-mainText underline mb-6">
              Meals:
            </div>
            {filteredMeals.length === 0 ? (
              <Alert message="You haven't added any meal to your card" />
            ) : (
              <ul className="grid grid-cols-2 gap-2">
                {filteredMeals?.map((meal) => (
                  <MealCardWithQuantity
                    key={`meal-item-${meal.item.id}`}
                    meal={meal}
                    onClick={() => removeMeal(meal.item.id || 0)}
                  />
                ))}
              </ul>
            )}
            <div className="font-bold text-xbase text-mainText underline my-6">
              Drinks:
            </div>
            {filteredDrinks.length === 0 ? (
              <Alert message="You haven't added any drink to your card" />
            ) : (
              <ul className="grid grid-cols-2 gap-2">
                {filteredDrinks.map((drink) => (
                  <DrinkCardWithQuantity
                    key={`meal-item-${drink.item.id}`}
                    drink={drink}
                    onClick={() => removeDrink(drink.item.id || 0)}
                  />
                ))}
              </ul>
            )}
            <div className="flex mt-5 w-full justify-end">
              <Button text="complete order" link="/checkout" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
