import * as React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { Suspense, useEffect, useState } from "react";
import { HeaderTitle } from "Frontend/common/index.js";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Placeholder from "Frontend/components/placeholder/Placeholder.js";
import { ClassNames } from "Frontend/utils/classnames.js";
import { CategoryEndpoint } from "Frontend/generated/endpoints.js";
import Category from "Frontend/generated/com/lpw/getfed/models/Category.js";
import { Icon } from "Frontend/common/icon/icon.js";
// import { Icon } from "@hilla/react-components/Icon";

export default function MenuLayout() {
  const [currentCategory, setCurrentCategory] = useState<string>("All");
  const [categories, setCategories] = useState<Category[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    CategoryEndpoint.getCategories()
      // @ts-ignore
      .then((res) => setCategories(res?.body));
    navigate("/menu/all");
  }, []);

  return (
    <div className="bg-[url('https://i.imgur.com/o1oOjuM.png')] w-full bg-no-repeat bg-cover py-[3.819vw]">
      <div className="container flex flex-col items-center">
        <HeaderTitle title="Menu" />
        <div className="mt-[1.5vw] flex gap-[24px]">
          <Link
            onClick={() => setCurrentCategory("All")}
            to="/menu/all"
            className={ClassNames(
              "px-[32px] py-[7px] gap-[10px] font-bold w-[11.389vw] text-main flex justify-center items-center rounded-[50px] border-[1px] border-main hover:text-white hover:bg-main",
              currentCategory === "All" ? "text-white bg-main" : ""
            )}
          >
            {/*<IoFastFoodSharp size={20} />*/}
            <span className="mb-[-3px]">All</span>
          </Link>
          {categories.map((category) => (
            <Link
              key={`category-item-${category.id}`}
              onClick={() => setCurrentCategory(category.label || "")}
              to={`/menu/${category.label?.toLocaleLowerCase()}`}
              className={ClassNames(
                "px-[32px] py-[7px] gap-[10px] font-bold w-[11.389vw] text-main flex justify-center items-center rounded-[50px] border-[1px] border-main hover:text-white hover:bg-main",
                currentCategory === category.label ? "text-white bg-main" : ""
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
