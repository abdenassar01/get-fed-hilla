import * as React from "react";
import useFetch from "Frontend/utils/hooks/index.js";
import Meal from "Frontend/generated/com/lpw/getfed/models/Meal.js";
import { MealEndpoint } from "Frontend/generated/endpoints.js";
import { DataTable, Loading } from "Frontend/common/index.js";
import Error from "Frontend/common/error/error.js";
import { Outlet } from "react-router-dom";
import { NoStyleLink } from "Frontend/common/no-style-link/no-style-link.js";

export default function MealsManagement() {
  const { data, loading, error } = useFetch<Meal[]>(async () => {
    const res = await MealEndpoint.getMeals(0, 20);
    return res?.body;
  }, []);

  const header = [
    "title",
    "description",
    "date created",
    "price",
    "rating",
    "category",
  ];

  if (loading) return <Loading size={10} />;
  if (error) return <Error />;

  return (
    <div className="">
      <div className="text-xbase font-bold text-cardText sm:text-[5.340vw]">
        Meals
      </div>
      <div className="w-full">
        <div className="my-3">
          <NoStyleLink
            className="bg-main px-[32px] transition-all ease-in delay-75 py-[7px] border-[1px] rounded-full border-main text-white hover:text-main hover:bg-[transparent]"
            link="/admin/managements/meals/new"
          >
            add meal
          </NoStyleLink>
        </div>

        <Outlet />
        {data && <DataTable header={header} data={data} />}
      </div>
    </div>
  );
}
