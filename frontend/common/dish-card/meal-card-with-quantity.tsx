import { MealItem } from "Frontend/types/types.js";
import { IoIosCloseCircle } from "react-icons/io";

export function MealCardWithQuantity(props: {
  meal: MealItem;
  onClick: () => void;
  className?: string;
}) {
  return (
    <li className={props.className}>
      <div className="transition-all delay-1000 relative bg-white shadow-1 border-[1px] border-[#F4F4F4] h-[10vw] rounded-[8px] flex items-center justify-between">
        <div
          style={{ backgroundImage: `url('${props.meal.item.image}')` }}
          className="h-full w-[10vw] bg-no-repeat bg-cover bg-center rounded-[8px]"
        />
        <div
          onClick={props.onClick}
          className="absolute top-1 right-3 text-error"
        >
          <IoIosCloseCircle size={24} />
        </div>
        <div className="flex flex-col p-4 justify-between items-end mt-4">
          <div className="text-[#949494]">{props.meal.item.title}</div>
          <div className="flex flex-col justify-between items-end gap-2">
            <div className="text-mainText">
              {
                // @ts-ignore
                props.meal.item.price * props.meal.qte
              }{" "}
              Mad
            </div>
            <div className="px-5 py-2 bg-secondary text-white rounded-[4px]">
              Quantity: {props.meal.qte}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
