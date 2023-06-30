import * as React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Category from "Frontend/generated/com/lpw/getfed/models/Category.js";
import {
  CategoryEndpoint,
  MealEndpoint,
} from "Frontend/generated/endpoints.js";
import { DishCard } from "Frontend/common/index.js";
import Meal from "Frontend/generated/com/lpw/getfed/models/Meal.js";
import { data } from "autoprefixer";

export default function CategoryDetails() {
  const { category } = useParams();
  const [items, setItems] = useState<Meal[]>([]);
  console.log(category);

  useEffect(() => {
    MealEndpoint.getMealByCategory(parseInt(category || "1"), 0, 10).then(
      // @ts-ignore
      (res) => setItems(res?.body)
    );
  }, [category]);
  console.log(items);
  return (
    <div className="container">
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
