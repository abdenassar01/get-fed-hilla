import * as React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MealEndpoint } from "Frontend/generated/endpoints.js";
import { DishCard, HeaderTitle } from "Frontend/common/index.js";
import Meal from "Frontend/generated/com/lpw/getfed/models/Meal.js";
import useFetch from "Frontend/utils/use-fetch.js";

export default function CategoryDetails() {
  const { category } = useParams();

  const { data, loading, error } = useFetch<Meal[]>(async () => {
    if (category && parseInt(category) === 1) {
      // @ts-ignore
      return await MealEndpoint.getMeals(0, 10).then((res) => res?.body);
    } else {
      // @ts-ignore
      return await MealEndpoint.getMealByCategory(
        parseInt(category || "1"),
        0,
        10
      ).then((res) => res?.body);
    }
  }, category);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  // useEffect(() => {}, [category]);
  return (
    <div className="container">
      {/*<HeaderTitle title={items[0]?.category.label || ""} />*/}
      <div className="grid grid-cols-4 gap-[20px]">
        {data &&
          data.map((item) => (
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
