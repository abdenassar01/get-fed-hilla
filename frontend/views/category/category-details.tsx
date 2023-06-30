import * as React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { MealEndpoint } from "Frontend/generated/endpoints.js";
import { Alert, Button, DishCard, Loading } from "Frontend/common/index.js";
import Meal from "Frontend/generated/com/lpw/getfed/models/Meal.js";
import useFetch from "Frontend/utils/use-fetch.js";

export default function CategoryDetails() {
  const { category } = useParams();
  const [page, setPage] = useState<number>(0);
  const getData = async () => {
    if (category && parseInt(category) === 1) {
      // @ts-ignore
      return await MealEndpoint.getMeals(page, 12).then((res) => res?.body);
    } else {
      // @ts-ignore
      return await MealEndpoint.getMealByCategory(
        parseInt(category || "1"),
        page,
        12
      ).then((res) => res?.body);
    }
  };

  const { data, loading, error } = useFetch<Meal[]>(getData, [category, page]);

  if (loading) return <Loading />;
  if (error) return <div>error</div>;
  if (data?.length === 0)
    return <Alert message="There is no meals on this category" />;

  return (
    <div className="container flex flex-col items-center gap-12">
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
      <Button
        className="w-fit"
        text={`Page ${page + 2}`}
        onClick={() => setPage((prev) => prev++)}
      />
    </div>
  );
}
