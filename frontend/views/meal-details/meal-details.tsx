import * as React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "Frontend/utils/use-fetch.js";
import Meal from "Frontend/generated/com/lpw/getfed/models/Meal.js";
import { MealEndpoint } from "Frontend/generated/endpoints.js";
import {
  Alert,
  HeaderTitle,
  Loading,
  StartRating,
} from "Frontend/common/index.js";
import { LongText } from "Frontend/common/long-text/index.js";

export function MealDetails({ category }: { category: number }) {
  const { meal } = useParams();

  const getData = async () => {
    return await MealEndpoint.getMealById(parseInt(meal || "")).then(
      (res) => res?.body
    );
  };

  const { data, loading, error } = useFetch<Meal>(getData, []);

  if (loading) return <Loading />;
  if (error) return <Alert message="error accured" status="error" />;
  console.log(data);
  return (
    <div>
      <div className="container flex flex-col gap-12">
        <HeaderTitle title={data?.title || ""} />
        <div className="flex gap-12">
          <div
            style={{ backgroundImage: `url('${data?.image}')` }}
            className={`bg-contain bg-no-repeat w-[30vw] h-[30vw] rounded-md`}
          />
          <div className="">
            <h1 className="text-main text-xxl font-bold capitalize">
              {data?.title}
            </h1>
            <div className="">Price: {data?.price}</div>
            <div className="flex gap-2 items-center">
              Rating: <StartRating rating={data?.rating || 0} />{" "}
            </div>
            <LongText
              text={data?.description || ""}
              nbrCharacteres={200}
              className="w-[30vw]"
            />
            <div>
              see more in{" "}
              <Link to={`/menu/${data?.category}`}>
                {data?.category?.label || "Hello world"}
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
