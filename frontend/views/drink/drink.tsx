import * as React from "react";
import { DrinkCard } from "Frontend/common/drink-card/drink-card.js";
import { HeaderTitle } from "Frontend/common/index.js";

export default function Drink() {
  const drinks = [
    {
      id: 1,
      label: "Coca Cola soda - M ",
      image:
        "https://static.vecteezy.com/system/resources/previews/023/338/744/non_2x/ai-generative-coca-cola-company-fizzy-drinks-diet-coke-pepsi-free-png.png",
      price: 20,
    },
    {
      id: 2,
      label: "Coca Cola soda - M ",
      image:
        "https://static.vecteezy.com/system/resources/previews/023/338/744/non_2x/ai-generative-coca-cola-company-fizzy-drinks-diet-coke-pepsi-free-png.png",
      price: 20,
    },
    {
      id: 3,
      label: "Coca Cola soda - M ",
      image:
        "https://static.vecteezy.com/system/resources/previews/023/338/744/non_2x/ai-generative-coca-cola-company-fizzy-drinks-diet-coke-pepsi-free-png.png",
      price: 20,
    },
    {
      id: 4,
      label: "Coca Cola soda - M ",
      image:
        "https://static.vecteezy.com/system/resources/previews/023/338/744/non_2x/ai-generative-coca-cola-company-fizzy-drinks-diet-coke-pepsi-free-png.png",
      price: 20,
    },
  ];

  return (
    <div>
      <div className="container">
        <HeaderTitle title="Drinks" />
        <div className="grid grid-cols-3 gap-4 mt-5">
          {drinks.map((drink) => (
            <DrinkCard key={`drink-card-${drink.id}`} drink={drink} />
          ))}
        </div>
      </div>
    </div>
  );
}
