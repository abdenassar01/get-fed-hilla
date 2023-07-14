import * as React from "react";
import { Suspense, useEffect } from "react";
import { CategoryEndpoint } from "Frontend/generated/endpoints.js";
import useFetch from "Frontend/utils/hooks/use-fetch.js";
import { NoStyleLink } from "Frontend/common/no-style-link/no-style-link.js";
import { Alert, Loading } from "Frontend/common/index.js";
import { Outlet, useNavigate } from "react-router-dom";
import SubCategory from "Frontend/generated/com/lpw/getfed/models/SubCategory.js";

export default function CustomiseMeal() {
  const navigate = useNavigate();
  const getData = async () => {
    return await CategoryEndpoint.getSubCategories();
  };

  useEffect(() => {
    navigate("/custom-meal/1");
  }, []);

  const { data, loading, error } = useFetch<SubCategory[]>(getData, []);

  if (error) return <Alert message="error accured" status="error" />;

  return (
    <div className="bg-background">
      <div className="container py-3">
        <Suspense fallback={<Loading />}>
          <div className="flex gap-3 no-scrollbar overflow-scroll p-2 bg-white rounded-[8px]">
            {data?.map((category) => (
              <NoStyleLink
                link={`/custom-meal/${category.id}`}
                key={`sub-category-${category.id}`}
                className="flex flex-col text-mainText py-1 px-2 items-center gap-2 bg-background rounded-[8px]"
                activeClassName="duration-[2000ms] prose-img:animate-spin !bg-main text-white"
              >
                <img
                  src={category.icon}
                  alt={category.title}
                  className="w-[5vw] max-h-[5vw] rounded-full transition hover:animate-spin"
                />
                <div className="font-bold">{category.title}</div>
              </NoStyleLink>
            ))}
          </div>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
