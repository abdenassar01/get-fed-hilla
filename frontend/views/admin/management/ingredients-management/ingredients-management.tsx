import { NoStyleLink } from "Frontend/common/no-style-link/no-style-link.js";
import { Outlet } from "react-router-dom";
import {
  Alert,
  ComponentLoader,
  IngredientDataTable,
} from "Frontend/common/index.js";
import * as React from "react";
import useFetch from "Frontend/utils/hooks/index.js";
import { IngredientEndpoint } from "Frontend/generated/endpoints.js";
import Error from "Frontend/common/error/error.js";
import Ingredient from "Frontend/generated/com/lpw/getfed/models/Ingredient.js";

export default function IngredientsManagement() {
  const { data, loading, error } = useFetch<Ingredient[]>(async () => {
    return await IngredientEndpoint.getAll(0, 20);
  }, []);

  const header = ["title", "price", "sub category", "#"];

  if (loading) return <ComponentLoader />;
  if (error)
    return <Alert message="error getting ingredients" status="error" />;

  return (
    <div className="">
      <div className="text-xbase font-bold text-cardText sm:text-[5.340vw]">
        Ingredients
      </div>
      <div className="w-full">
        <div className="my-3">
          <NoStyleLink
            className="bg-main px-[32px] transition-all ease-in delay-75 py-[7px] border-[1px] rounded-full border-main text-white hover:text-main hover:bg-[transparent]"
            link="/admin/managements/ingredients/new"
          >
            add ingredient
          </NoStyleLink>
        </div>

        <Outlet />
        {data && <IngredientDataTable header={header} data={data} />}
      </div>
    </div>
  );
}
