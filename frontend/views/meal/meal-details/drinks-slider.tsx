import * as React from "react";
import { DrinkEndpoint } from "Frontend/generated/endpoints.js";
import useFetch from "Frontend/utils/hooks/use-fetch.js";
import { Alert, Loading } from "Frontend/common/index.js";
import Slider from "react-slick";
import Drink from "Frontend/generated/com/lpw/getfed/models/Drink.js";
import { DrinkCard } from "Frontend/common/drink-card/drink-card.js";
import { Link } from "react-router-dom";

type Props = {
  number: number;
};

export function DrinksSlider({ number }: Props) {
  const getData = async () => {
    return await DrinkEndpoint.getDrinks(0, number).then((res) => res);
  };

  const { data, loading, error } = useFetch<any>(getData, []);

  if (loading) return <Loading />;
  if (error) return <Alert message="error accured" status="error" />;

  return (
    // @ts-ignore
    <Slider slidesToShow={1.4} infinite={false}>
      {data?.map((drink: Drink) => (
        <DrinkCard drink={drink} />
      ))}
      <Link
        to="/drink"
        className="text-mainText font-bold hover:no-underline  "
      >
        <div className="shadow-1 border-[1px] items-center min-w-[30vw] border-[#F4F4F4] h-[10vw] rounded-[8px] flex justify-center px-4 hover:bg-main hover:text-white">
          <div className="text-xl">More Drinks</div>
        </div>
      </Link>
    </Slider>
  );
}
