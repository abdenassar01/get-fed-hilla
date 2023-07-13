import * as React from "react";
import Drink from "Frontend/generated/com/lpw/getfed/models/Drink.js";
import { FaCartPlus } from "react-icons/fa";
import { useCartStore } from "Frontend/stores/cart-store.js";
import { useUserStore } from "Frontend/stores/user-store.js";
import { useNavigate } from "react-router-dom";

type Props = {
  drink: Drink;
};

export function DrinkCard({
  drink: { image, label, id, price, description },
}: Props) {
  const { addDrink } = useCartStore();
  const { authenticated } = useUserStore();

  const navigate = useNavigate();
  const handleAddDrink = () => {
    if (authenticated) {
      addDrink({ id, image, label, price, description });
    } else {
      return navigate("/login");
    }
  };

  return (
    <div className="shadow-1 bg-white h-[10vw] rounded-[8px] flex justify-between">
      <div className="flex flex-col p-4 justify-between">
        <div className="text-[#949494] text-xbase">{label}</div>
        <div className="flex justify-between items-center gap-2">
          <div className="text-xxl text-cardText">{price} Mad</div>
          <button
            onClick={handleAddDrink}
            className="cursor-pointer px-[18px] py-[3px] transition-all ease-in delay-75 flex items-center border-[1px] border-main gap-[4px] bg-main rounded-[50px] text-white hover:text-main hover:bg-[transparent]"
          >
            <FaCartPlus size={24} />
            add to cart
          </button>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url('${image}')` }}
        className="h-full w-[10vw] bg-no-repeat bg-contain rounded-[8px]"
      />
    </div>
  );
}
