import { useCartStore } from "Frontend/stores/cart-store.js";
import { useUserStore } from "Frontend/stores/user-store.js";
import { Button } from "Frontend/common/index.js";
import React, { useEffect, useState } from "react";
import {
  DropdownField,
  FieldPhoneWithCountry,
  TextInput,
} from "Frontend/common/form-fields/index.js";
import { useForm } from "react-hook-form";
import Delivery from "Frontend/generated/com/lpw/getfed/models/Delivery.js";
import { DrinkCardWithQuantity } from "Frontend/common/drink-card/drink-card-with-quantity.js";
import { removeDrink } from "Frontend/generated/DrinkEndpoint.js";
import { DrinkItem, MealItem } from "Frontend/types/types.js";
import { getUniqueListBy } from "Frontend/utils/get-unique.js";
import { MealCardWithQuantity } from "Frontend/common/dish-card/meal-card-with-quantity.js";

export default function Checkout() {
  const [deliveryServices, setDeliveryServices] = useState([]);
  const [filtredMeals, setFiltredMeals] = useState<MealItem[]>([]);
  const [filtredDrinks, setFiltredDrinks] = useState<DrinkItem[]>([]);

  const { meals, drinks, removeDrink, removeMeal } = useCartStore();
  const { user } = useUserStore();

  useEffect(() => {
    setFiltredMeals(getUniqueListBy(meals));
    setFiltredDrinks(getUniqueListBy(drinks));
  }, [meals, drinks]);

  const { control, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log("data: ", data);
  };

  return (
    <div className="bg-background min-h-[75vh] flex items-center justify-center">
      {meals.length + drinks.length === 0 ? (
        <div className="flex flex-col items-center gap-4">
          <div>Please add products to your card before trying to checkout</div>
          <div className="flex gap-2">
            <Button text="see meals" className="rounded-[4px]" link="/meals" />
            <Button
              text="see drinks"
              className="rounded-[4px]"
              link="/drinks"
            />
          </div>
        </div>
      ) : (
        <div className="container">
          {meals.length === 0 && (
            <p className="flex gap-1">
              add a meal before proceeding checkout ?{" "}
              <Button
                text="add meal"
                className="hover:no-underline border-none hover:!text-mainText"
                link="/meals"
                theme="tertiary"
              />{" "}
            </p>
          )}
          {drinks.length === 0 && (
            <p className="flex gap-1">
              add a drink before proceeding checkout ?{" "}
              <Button
                text="add drink"
                className="hover:no-underline border-none hover:!text-mainText"
                link="/drink"
                theme="tertiary"
              />{" "}
            </p>
          )}
          <div className="flex justify-between items-center">
            <img
              src="https://i.imgur.com/AGI2Vjx.png"
              alt="khabiry login page"
              className="w-[30vw] sm:w-[48.058vw]"
            />
            <div className="flex w-[41.042vw] h-[50vh] overflow-y-scroll flex-col gap-[24px] no-scrollbar sm:w-full">
              <div className="grid grid-cols-2 gap-x-2">
                <FieldPhoneWithCountry
                  control={control}
                  label="Phone number"
                  name="phone"
                />
                <TextInput
                  control={control}
                  label="Shipping Address"
                  name="address"
                  placeholder="Your address*"
                />
                <DropdownField
                  control={control}
                  label="Delivery"
                  name="subcategory"
                  className="bg-white"
                  items={deliveryServices}
                />
                <DropdownField
                  control={control}
                  label="Payment method"
                  className="bg-white"
                  name="paymentMethod"
                  items={deliveryServices}
                />
                <Button
                  className="w-full rounded-[8px] col-span-2"
                  text="checkout"
                  onClick={handleSubmit(onSubmit)}
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="overflow-scroll flex gap-2 no-scrollbar list-none">
                  {filtredMeals.map((meal) => (
                    <MealCardWithQuantity
                      className="min-w-[25vw]"
                      key={`meal-item-${meal.item.id}`}
                      meal={meal}
                      onClick={() => removeDrink(meal.item.id || 0)}
                    />
                  ))}
                </div>
                <div className="overflow-scroll flex gap-2 no-scrollbar list-none">
                  {filtredDrinks.map((drink) => (
                    <DrinkCardWithQuantity
                      className="min-w-[25vw]"
                      key={`meal-item-${drink.item.id}`}
                      drink={drink}
                      onClick={() => removeDrink(drink.item.id || 0)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
