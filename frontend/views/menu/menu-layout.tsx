import * as React from "react";
import { Suspense, useState } from "react";
import { HeaderTitle } from "Frontend/common/index.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import Placeholder from "Frontend/components/placeholder/Placeholder.js";
import { ClassNames } from "Frontend/utils/classnames.js";
import { CategoryEndpoint } from "Frontend/generated/endpoints.js";
import Category from "Frontend/generated/com/lpw/getfed/models/Category.js";
import useFetch from "Frontend/utils/hooks/use-fetch.js";
import CategoryDetails from "Frontend/views/menu/category/category-details.js";

export default function MenuLayout() {
  const [currentCategory, setCurrentCategory] = useState<number>();

  const navigate = useNavigate();
  const { meal } = useParams();

  const getData = async () => {
    return await CategoryEndpoint.getCategories().then((res) => {
      if (meal) {
        setCurrentCategory(parseInt(meal));
        navigate(`/menu/${meal}`);
      } else {
        setCurrentCategory(0);
        navigate("/menu/0");
      }
      // @ts-ignore
      return res;
    });
  };

  const { data, error, loading } = useFetch<Category[]>(getData, []);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  return (
    <div className="py-[3.819vw] bg-background min-h-[70vh]">
      <div className="container flex flex-col items-center">
        <HeaderTitle title="Menu" />
        <div className="mt-[1.5vw] flex gap-[24px] w-[70vw] overflow-scroll no-scrollbar">
          {data &&
            data.map((category) => (
              <Link
                key={`category-item-${category.id}`}
                onClick={() => setCurrentCategory(category.id)}
                to={`/menu/${category.id}`}
                className={ClassNames(
                  "px-[32px] py-[7px] gap-[10px] min-w-[10vw] font-bold w-[11.389vw] text-main flex justify-center items-center rounded-[50px] border-[1px] border-main hover:text-white hover:bg-main",
                  currentCategory === category.id ? "text-white bg-main" : ""
                )}
              >
                <span className="mb-[-3px]">{category.label}</span>
              </Link>
            ))}
        </div>
      </div>
      <Suspense fallback={<Placeholder />}>
        <CategoryDetails category={currentCategory || 0} />
      </Suspense>
    </div>
  );
}
