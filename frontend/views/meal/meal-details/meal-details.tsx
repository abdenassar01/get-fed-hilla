import * as React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "Frontend/utils/hooks/use-fetch.js";
import Meal from "Frontend/generated/com/lpw/getfed/models/Meal.js";
import { MealEndpoint } from "Frontend/generated/endpoints.js";
import {
  Alert,
  HeaderTitle,
  Loading,
  StartRating,
} from "Frontend/common/index.js";
import { LongText } from "Frontend/common/long-text/index.js";
import { DrinksSlider } from "Frontend/views/meal/meal-details/drinks-slider.js";
import { FaCartPlus } from "react-icons/fa";

export default function MealDetails() {
  const { meal } = useParams();

  const getData = async () => {
    return await MealEndpoint.getMealById(parseInt(meal || "")).then(
      (res) => res
    );
  };

  const { data, loading, error } = useFetch<Meal>(getData, []);

  if (loading) return <Loading />;
  if (error) return <Alert message="error accured" status="error" />;

  return (
    <div className="bg-background">
      <div className="container flex flex-col gap-12">
        <HeaderTitle title={data?.title || ""} />
        <div className="flex gap-5">
          <div
            style={{ backgroundImage: `url('${data?.image}')` }}
            className={`bg-cover bg-no-repeat w-[30vw] h-[30vw] rounded-md`}
          />
          <div className="flex">
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
                see similar to:{" "}
                <Link to={`/menu/${data?.category}`}>
                  {data?.category?.label || "Hello world"}
                </Link>{" "}
              </div>
              <div className="text-mainText text-xbase my-6">
                Are you looking for a drink ?
              </div>
              <div className="overflow-hidden max-w-[50vw]">
                <DrinksSlider number={3} />
              </div>
            </div>
            <button className="px-[18px] h-fit py-[3px] transition-all min-w-fit whitespace-nowrap ease-in delay-75 flex items-center border-[1px] border-main gap-[4px] bg-main rounded-[50px] text-white hover:text-main hover:bg-[transparent]">
              <FaCartPlus size={24} />
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
