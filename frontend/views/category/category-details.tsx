import * as React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MealEndpoint } from "Frontend/generated/endpoints.js";
import { DishCard, HeaderTitle } from "Frontend/common/index.js";
import Meal from "Frontend/generated/com/lpw/getfed/models/Meal.js";
import ResponseEntity from "Frontend/generated/org/springframework/http/ResponseEntity.js";

export default function CategoryDetails() {
  const { category } = useParams();
  const [items, setItems] = useState<Meal[]>([]);

  useEffect(() => {
    if (category && parseInt(category) === 1) {
      // @ts-ignore
      MealEndpoint.getMeals(0, 10).then((res) => setItems(res?.body));
    } else {
      MealEndpoint.getMealByCategory(parseInt(category || "1"), 0, 10).then(
        // @ts-ignore
        (res) => setItems(res?.body)
      );
    }
  }, [category]);
  return (
    <div className="container">
      {/*<HeaderTitle title={items[0]?.category.label || ""} />*/}
      <div className="grid grid-cols-3 gap-[20px]">
        {items.map((item) => (
          <DishCard
            key={"dish-card-" + item.id}
            id={item?.id || 1}
            img={item?.image || ""}
            title={item?.title || ""}
            description={item.description || ""}
            rating={item?.rating || 0}
            price={item?.price || 0}
          />
        ))}
      </div>
    </div>
  );
}
