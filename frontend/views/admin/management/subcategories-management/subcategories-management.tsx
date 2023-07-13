import * as React from "react";
import { Outlet } from "react-router-dom";
import { NoStyleLink } from "Frontend/common/no-style-link/no-style-link.js";
import useFetch from "Frontend/utils/hooks/index.js";
import {
  CategoryEndpoint,
  MealEndpoint,
} from "Frontend/generated/endpoints.js";
import { ComponentLoader } from "Frontend/common/index.js";
import Error from "Frontend/common/error/error.js";
import SubCategory from "Frontend/generated/com/lpw/getfed/models/SubCategory.js";
import { SubcategoryDataTable } from "Frontend/common/tables/subcategory-data-table.js";

export default function SubCategoriesManagement() {
  const { data, loading, error } = useFetch<SubCategory[]>(async () => {
    const res = await CategoryEndpoint.getSubCategories();
    return res?.body;
  }, []);

  const header = ["title", "label", "description", "price"];

  if (loading) return <ComponentLoader />;
  if (error) return <Error />;

  return (
    <div>
      <div className="text-xbase font-bold text-cardText sm:text-[5.340vw]">
        Sub Categories
      </div>
      <div className="w-full">
        <div className="my-3">
          <NoStyleLink
            className="bg-main px-[32px] transition-all ease-in delay-75 py-[7px] border-[1px] rounded-full border-main text-white hover:text-main hover:bg-[transparent]"
            link="/admin/managements/subcategories/new"
          >
            add sub category
          </NoStyleLink>
        </div>

        <Outlet />
        {data && <SubcategoryDataTable header={header} data={data} />}
      </div>
    </div>
  );
}
