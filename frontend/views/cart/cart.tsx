import * as React from "react";
import { useCartStore } from "Frontend/stores/cart-store.js";
import { Alert, Button, HeaderTitle } from "Frontend/common/index.js";
import { useEffect, useState } from "react";
import { DrinkItem, MealItem } from "Frontend/types/types.js";
import { IoIosCloseCircle } from "react-icons/io";

function getUniqueListBy(
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

export default function Cart() {
  const { meals, drinks, removeMeal, removeDrink } = useCartStore();

  const [filtredMeals, setFiltredMeals] = useState<MealItem[]>([]);
  const [filtredDrinks, setFiltredDrinks] = useState<DrinkItem[]>([]);

  useEffect(() => {
    setFiltredMeals(getUniqueListBy(meals));
    setFiltredDrinks(getUniqueListBy(drinks));
  }, [meals, drinks]);

  return (
    <div className="bg-mainText bg-[url('https://i.imgur.com/D1FTJJD.png')] bg-no-repeat bg-cover min-h-[700px] flex flex-col items-center">
      <div className="my-12 py-6 w-[70vw] p-3 bg-white rounded-[8px] shadow-lg">
        <HeaderTitle title="My Cart" />
        {filtredMeals.length === 0 && filtredDrinks.length === 0 ? (
          <Alert message="You haven't added any item to you cart yet" />
        ) : (
          <div className="">
            <div className="font-bold text-xbase text-mainText underline mb-6">
              Meals:
            </div>
            {filtredMeals.length === 0 ? (
              <Alert message="You haven't added any meal to your card" />
            ) : (
              <ul className="grid grid-cols-2 gap-2">
                {filtredMeals?.map((meal) => (
                  <li key={`meal-item-${meal.item.id}`}>
                    <div className="transition-all delay-1000 relative bg-white shadow-1 border-[1px] border-[#F4F4F4] h-[10vw] rounded-[8px] flex items-center justify-between">
                      <div
                        style={{ backgroundImage: `url('${meal.item.image}')` }}
                        className="h-full w-[10vw] bg-no-repeat bg-cover bg-center"
                      />
                      <div
                        onClick={() => removeMeal(meal.item.id || 0)}
                        className="absolute top-1 right-3 text-error"
                      >
                        <IoIosCloseCircle size={24} />
                      </div>
                      <div className="flex flex-col p-4 justify-between items-end mt-4">
                        <div className="text-[#949494]">{meal.item.title}</div>
                        <div className="flex flex-col justify-between items-end gap-2">
                          <div className="text-mainText">
                            {
                              // @ts-ignore
                              meal.item.price * meal.qte
                            }{" "}
                            Mad
                          </div>
                          <div className="px-5 py-2 bg-secondary text-white rounded-[4px]">
                            Quantity: {meal.qte}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="font-bold text-xbase text-mainText underline my-6">
              Drinks:
            </div>
            {filtredDrinks.length === 0 ? (
              <Alert message="You haven't added any drink to your card" />
            ) : (
              <ul className="grid grid-cols-2 gap-2">
                {filtredDrinks.map((drink) => (
                  <li key={`meal-item-${drink.item.id}`}>
                    <div className="relative bg-white shadow-1 border-[1px] border-[#F4F4F4] h-[10vw] rounded-[8px] flex items-center justify-between">
                      <div
                        style={{
                          backgroundImage: `url('${drink.item.image}')`,
                        }}
                        className="h-full w-[10vw] bg-no-repeat bg-cover bg-center"
                      />
                      <div
                        onClick={() => removeMeal(drink.item.id || 0)}
                        className="absolute top-1 right-3 text-error"
                      >
                        <IoIosCloseCircle size={24} />
                      </div>
                      <div className="flex flex-col p-4 justify-between items-end mt-4">
                        <div className="text-[#949494]">{drink.item.label}</div>
                        <div className="flex flex-col justify-between items-end gap-2">
                          <div className="text-mainText">
                            {
                              // @ts-ignore
                              drink.item.price * drink.qte
                            }{" "}
                            Mad
                          </div>
                          <div className="px-5 py-2 bg-secondary text-white rounded-[4px]">
                            Quantity: {drink.qte}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
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
