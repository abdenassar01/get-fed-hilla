import Ingredient from "Frontend/generated/com/lpw/getfed/models/Ingredient.js";
import * as React from "react";

export const IngrediantCard = ({ id, label, price, image }: Ingredient) => {
  return (
    <div className="grid place-items-center p-3 h-fit rounded-[8px]">
      <img
        src={image}
        alt={label}
        className="w-[7vw] aspect-square rounded-full"
      />
      <div className="text-center">{label}</div>
      <div className="flex w-full justify-end">
        <div className="font-bold text-main">{price} Mad</div>
      </div>
    </div>
  );
};
