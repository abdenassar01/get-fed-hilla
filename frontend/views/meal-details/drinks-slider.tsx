import * as React from "react";
import { DrinkEndpoint } from "Frontend/generated/endpoints.js";
import useFetch from "Frontend/utils/use-fetch.js";
import { Alert, Loading } from "Frontend/common/index.js";
import Slider from "react-slick";
import Drink from "Frontend/generated/com/lpw/getfed/models/Drink.js";
import { DrinkCard } from "Frontend/common/drink-card/drink-card.js";

type Props = {
  number: number;
};

export function DrinksSlider({ number }: Props) {
  const getData = async () => {
    return await DrinkEndpoint.getDrinks(0, number).then((res) => res?.body);
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
    </Slider>
  );
}
