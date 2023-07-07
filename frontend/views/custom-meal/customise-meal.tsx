import * as React from "react";
import { CategoryEndpoint } from "Frontend/generated/endpoints.js";
import useFetch from "Frontend/utils/use-fetch.js";
import { NoStyleLink } from "Frontend/common/no-style-link/no-style-link.js";
import { Loading } from "Frontend/common/index.js";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function CustomiseMeal() {
  const getData = async () => {
    const res = await CategoryEndpoint.getSubCategories();
    return res?.body;
  };

  const { data, loading, error } = useFetch<SubCategory[]>(getData, []);

  if (error)
    return (
      <div className="text-red h-[90vh] w-[100vw] flex justify-center items-center">
        error accured
      </div>
    );

  return (
    <div>
      <div className="container">
        <Suspense fallback={<Loading />}>
          <div className="flex gap-3 no-scrollbar overflow-scroll p-2 bg-background rounded-[8px]">
            {data?.map((category) => (
              <NoStyleLink
                link={`/custom-meal/${category.id}`}
                key={`sub-category-${category.id}`}
                className="flex flex-col text-mainText py-1 px-2 items-center gap-2 bg-white rounded-[8px]"
                activeClassName="prose-img:animate-spin !bg-main text-white"
              >
                <img
                  src={category.image}
                  alt={category.label}
                  className="w-[5vw] max-h-[5vw] rounded-full transition hover:animate-spin"
                />
                <div className="font-bold">{category.label}</div>
              </NoStyleLink>
            ))}
          </div>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
