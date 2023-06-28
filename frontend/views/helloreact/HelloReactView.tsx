import { Button } from '@hilla/react-components/Button.js';
import { Notification } from '@hilla/react-components/Notification.js';
import { TextField } from '@hilla/react-components/TextField.js';
import {
    CategoryEndpoint,
    DeliveryEndpoint,
    DrinkEndpoint,
    EmployeeEndpoint,
    HelloReactEndpoint, IngredientEndpoint, MealEndpoint
} from 'Frontend/generated/endpoints.js';
import { useState } from 'react';
import Category from "Frontend/generated/com/lpw/getfed/models/Category.js";
import Delivery from "Frontend/generated/com/lpw/getfed/models/Delivery.js";
import Drink from "Frontend/generated/com/lpw/getfed/models/Drink.js";
import Employee from "Frontend/generated/com/lpw/getfed/models/Employee.js";
import Ingredient from "Frontend/generated/com/lpw/getfed/models/Ingredient.js";
import Meal from "Frontend/generated/com/lpw/getfed/models/Meal.js";

export default function HelloReactView() {
  const [name, setName] = useState('');

  return (
    <>
      <section className="flex p-m gap-m items-end">
        <TextField
          label="Your name"
          onValueChanged={(e) => {
            setName(e.detail.value);
          }}
        />
        {/* TODO: update removes the entity and save new instance */}
        {/* TODO: search drinks not working + add all drinks endpoint */}
        <Button
          onClick={async () => {
              const meal: Meal = {
                  title: 'meal title',
                  category: {
                      id: 3
                  },
                  image: 'img.png',
                  description: 'this is a long description',
                  // ingredients: [
                  //     {
                  //         id: 2
                  //     },{
                  //         id: 3
                  //     }
                  // ]
              }
              // console.log("Operation: ", await IngredientEndpoint.getAll(0, 10))
              console.log("items: ", await MealEndpoint.getMealByCategory({
                  id: 3
              }, 0, 10));
          }}
        >
          Test Api
        </Button>
      </section>
    </>
  );
}
