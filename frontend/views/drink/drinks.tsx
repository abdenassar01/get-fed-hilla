import * as React from "react";
import { DrinkCard } from "Frontend/common/drink-card/drink-card.js";
import { HeaderTitle, Loading } from "Frontend/common/index.js";
import useFetch from "Frontend/utils/use-fetch.js";
import Drink from "Frontend/generated/com/lpw/getfed/models/Drink.js";
import { DrinkEndpoint } from "Frontend/generated/endpoints.js";

export default function Drinks() {
  const { data, error, loading } = useFetch<Drink[]>(async () => {
    const res = await DrinkEndpoint.getDrinks(0, 12);
    return res?.body;
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>error occured</div>;

  return (
    <div className="bg-background">
      <div className="container py-12">
        <HeaderTitle title="Drinks" />
        <div className="grid grid-cols-3 gap-4 mt-5">
          {data?.map((drink) => (
            <DrinkCard key={`drink-card-${drink.id}`} drink={drink} />
          ))}
        </div>
      </div>
    </div>
  );
}
