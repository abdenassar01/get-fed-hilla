import * as React from "react";
import { Suspense, useEffect, useState } from "react";
import { HeaderTitle } from "Frontend/common/index.js";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Placeholder from "Frontend/components/placeholder/Placeholder.js";
import { ClassNames } from "Frontend/utils/classnames.js";
import { CategoryEndpoint } from "Frontend/generated/endpoints.js";
import Category from "Frontend/generated/com/lpw/getfed/models/Category.js";

export default function MenuLayout() {
  const [currentCategory, setCurrentCategory] = useState<number>();
  const [categories, setCategories] = useState<Category[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    CategoryEndpoint.getCategories()
      .then((res) => {
        // @ts-ignore
        setCategories(res?.body);
      })
      .then(() => {
        setCurrentCategory(1);
        navigate("/menu/1");
      });
  }, []);

  return (
    <div className="py-[3.819vw]">
      {/*<div className="bg-[url('https://i.imgur.com/o1oOjuM.png')] w-full bg-no-repeat bg-cover py-[3.819vw]">*/}
      <div className="container flex flex-col items-center">
        <HeaderTitle title="Menu" />
        <div className="mt-[1.5vw] flex gap-[24px]">
          {categories.map((category) => (
            <Link
              key={`category-item-${category.id}`}
              onClick={() => setCurrentCategory(category.id)}
              to={`/menu/${category.id}`}
              className={ClassNames(
                "px-[32px] py-[7px] gap-[10px] font-bold w-[11.389vw] text-main flex justify-center items-center rounded-[50px] border-[1px] border-main hover:text-white hover:bg-main",
                currentCategory === category.id ? "text-white bg-main" : ""
              )}
            >
              <span className="mb-[-3px]">{category.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <Suspense fallback={<Placeholder />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
