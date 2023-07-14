import * as React from "react";
import {
  ComponentLoader,
  DishCard,
  HeaderTitle,
} from "Frontend/common/index.js";
import useFetch from "Frontend/utils/hooks/index.js";
import Meal from "Frontend/generated/com/lpw/getfed/models/Meal.js";
import { MealEndpoint } from "Frontend/generated/endpoints.js";
import Error from "Frontend/common/error/error.js";

export function SpecialDishes() {
  const { data, loading, error } = useFetch<Meal[]>(async () => {
    return await MealEndpoint.getMeals(0, 9).then((res) => res);
  }, []);

  if (loading) return <ComponentLoader />;
  if (error) return <Error />;

  return (
    <div className="py-[2.361vw]">
      <HeaderTitle title="Our Special dishes" />
      <div className="grid grid-cols-3 gap-[20px]">
        {data?.map((meal) => (
          <DishCard
            key={`meal-item-${meal.id}`}
            id={meal.id || 0}
            img={meal.image || ""}
            title={meal.title || ""}
            description={meal.description || ""}
            rating={meal.rating || 0}
            price={meal.price || 0}
          />
        ))}
      </div>
    </div>
  );
}
