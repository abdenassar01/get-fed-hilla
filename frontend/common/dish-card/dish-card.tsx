import { FaCartPlus } from "react-icons/fa";
import { Button, StartRating } from "Frontend/common/index.js";
import { useCartStore } from "Frontend/stores/cart-store.js";
import { useUserStore } from "Frontend/stores/user-store.js";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  img: string;
  title: string;
  description: string;
  rating: number;
  price: number;
};

export function DishCard({
  img,
  id,
  rating,
  price,
  description,
  title,
}: Props) {
  const navigate = useNavigate();
  const { addMeal } = useCartStore();
  const { authenticated } = useUserStore();

  const handleAddMeal = () => {
    if (authenticated) {
      addMeal({
        id,
        image: img,
        title,
        price,
        description,
        rating,
      });
    } else {
      return navigate("/login");
    }
  };

  return (
    <div className="mt-[25%] flex flex-col items-center w-[20.833vw] text-center bg-white shadow rounded-[10px] p-[10px]">
      <div
        style={{
          backgroundImage:
            `url('${img}')` || "url('https://i.imgur.com/iqWUU6x.png')",
        }}
        className="mt-[-25%] bg-cover shadow bg-no-repeat w-[12vw] h-[12vw] rounded-[8px]"
      />
      <h2 className="font-bold mt-[10px] text-xl">{title}</h2>
      <div className="flex justify-between w-[100%]">
        <StartRating rating={rating} />
        <div className="text-main flex">
          <s className="text-xl">{price + 5}</s>
          <p className="xbase font-medium">/{price} MAD</p>
        </div>
      </div>
      <div className="flex mt-[20px] justify-end items-center gap-[10px] w-[100%]">
        <Button
          text="see details"
          link={`/meal/${id}`}
          theme="tertiary"
          className=""
        />
        <button
          onClick={handleAddMeal}
          className="px-[18px] py-[3px] transition-all ease-in delay-75 flex items-center border-[1px] border-main gap-[4px] bg-main rounded-[50px] text-white hover:text-main hover:bg-[transparent]"
        >
          <FaCartPlus size={24} />
          add to cart
        </button>
      </div>
    </div>
  );
}
