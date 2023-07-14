import * as React from "react";
import { useState } from "react";
import { MealEndpoint } from "Frontend/generated/endpoints.js";
import { Alert, Button, DishCard, Loading } from "Frontend/common/index.js";
import Meal from "Frontend/generated/com/lpw/getfed/models/Meal.js";
import useFetch from "Frontend/utils/hooks/use-fetch.js";

export default function CategoryDetails({ category }: { category: number }) {
  const [page, setPage] = useState<number>(0);
  const getData = async () => {
    if (category === 0) {
      return await MealEndpoint.getMeals(page, 12).then((res) => res);
    } else {
      return await MealEndpoint.getMealByCategory(category, page, 12).then(
        (res) => res
      );
    }
  };

  const { data, loading, error, isFetching } = useFetch<Meal[]>(getData, [
    category,
    page,
  ]);

  if (loading || isFetching) return <Loading />;
  if (error) return <div>error</div>;
  if (data?.length === 0)
    return <Alert message="There is no meals on this category" />;

  return (
    <div className="pt-6 container flex flex-col items-center gap-12">
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
