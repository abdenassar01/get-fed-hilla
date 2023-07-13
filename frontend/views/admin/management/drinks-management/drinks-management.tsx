import * as React from "react";
import { NoStyleLink } from "Frontend/common/no-style-link/no-style-link.js";
import { Outlet } from "react-router-dom";
import { ComponentLoader, DrinkDataTable } from "Frontend/common/index.js";
import useFetch from "Frontend/utils/hooks/index.js";
import Meal from "Frontend/generated/com/lpw/getfed/models/Meal.js";
import { DrinkEndpoint } from "Frontend/generated/endpoints.js";
import Error from "Frontend/common/error/error.js";

export default function DrinksManagement() {
  const { data, loading, error } = useFetch<Meal[]>(async () => {
    const res = await DrinkEndpoint.getDrinks(0, 20);
    return res?.body;
  }, []);

  const header = ["title", "description", "price"];

  if (loading) return <ComponentLoader />;
  if (error) return <Error />;

  return (
    <div className="">
      <div className="text-xbase font-bold text-cardText sm:text-[5.340vw]">
        Drinks
      </div>
      <div className="w-full">
        <div className="my-3">
          <NoStyleLink
            className="bg-main px-[32px] transition-all ease-in delay-75 py-[7px] border-[1px] rounded-full border-main text-white hover:text-main hover:bg-[transparent]"
            link="/admin/managements/drinks/new"
          >
            add drink
          </NoStyleLink>
        </div>

        <Outlet />
        {data && <DrinkDataTable header={header} data={data} />}
      </div>
    </div>
  );
}
