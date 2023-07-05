import * as React from "react";
import { useCartStore } from "Frontend/stores/cart-store.js";
import { Alert, HeaderTitle } from "Frontend/common/index.js";

export default function Cart() {
  const { meals, drinks } = useCartStore();

  return (
    <div className="bg-mainText bg-[url('https://i.imgur.com/aWXoG4M.png')] bg-no-repeat bg-contain min-h-[700px] flex flex-col items-center">
      <div className="my-12 py-6 w-[70vw] p-3 bg-background rounded-[8px] shadow-lg">
        <HeaderTitle title="My Cart" />
        {meals.length === 0 && drinks.length === 0 ? (
          <Alert message="You haven't added any item to you cart yet" />
        ) : (
          <div className="">
            <div className="font-bold text-xbase text-mainText underline mb-6">
              Meals:
            </div>
            {meals.length === 0 ? (
              <Alert message="You haven't added any meal to your card" />
            ) : (
              <ul>
                {meals.map((meal) => (
                  <li>{meal.title}</li>
                ))}
              </ul>
            )}
            <div className="font-bold text-xbase text-mainText underline my-6">
              Meals:
            </div>
            {drinks.length === 0 ? (
              <Alert message="You haven't added any drink to your card" />
            ) : (
              <ul>
                {drinks.map((drink) => (
                  <li>{drink.label}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
