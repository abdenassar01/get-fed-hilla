import { useState } from "react";
import { ClassNames } from "Frontend/utils/classnames.js";
import Order from "Frontend/generated/com/lpw/getfed/models/Order.js";
import OrderStatus from "Frontend/generated/com/lpw/getfed/models/enums/OrderStatus.js";

type Props = {
  item: Order;
};

export function TableRow({ item }: Props) {
  const [shown, setShown] = useState<boolean>(false);

  return (
    <li key={item.id} className="">
      <div
        onClick={() => setShown((prev) => !prev)}
        className="flex cursor-pointer items-center justify-between border-b-[1px] border-b-[#E0E0E0] bg-[#F3F4F6] p-[14px]"
      >
        <div className="text-xxs text-[#A6A6A6]">
          <div className="text-bmb-xbasease font-bold text-cardText">
            {item.status}
          </div>
          <div className="">id {item.id}</div>
          <div className="">{item.totalPrice} Mad</div>
        </div>
        <div className="flex gap-[8px]">
          <img
            src="https://i.imgur.com/Y1ENOtQ.png"
            alt="eye icon"
            className="w-[3vw]"
          />
        </div>
      </div>
      <div
        className={ClassNames(
          "grid grid-rows-[0fr] overflow-hidden bg-white transition-all delay-300",
          shown ? "grid-rows-[1fr]" : ""
        )}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-[8]">
            <div className="flex pl-3 py-2 border-[1px] border-[#f3f3f3] items-center gap-[5.825vw]">
              <div className="min-w-[18.204vw] font-bold text-cardText">Id</div>
              <div className="text-[#A6A6A6]">{item.id}</div>
            </div>
            <div className="flex pl-3 py-2 border-[1px] border-[#f3f3f3] items-center gap-[5.825vw]">
              <div className="min-w-[18.204vw] font-bold text-cardText">
                Date
              </div>
              <div className="text-[#A6A6A6]">{item.dateCreated}</div>
            </div>
            <div className="flex pl-3 py-2 border-[1px] border-[#f3f3f3] items-center gap-[5.825vw]">
              <div className="min-w-[18.204vw] font-bold text-cardText">
                Status
              </div>
              <div
                className={ClassNames(
                  item.status === OrderStatus.DONE ? "text-[#15A024]" : "",
                  item.status === OrderStatus.AWAITING_PAYMENT
                    ? "text-[#E50300]"
                    : "",
                  item.status === OrderStatus.AWAITING ? "text-[#FF8024]" : "",
                  item.status === OrderStatus.IN_PROGRESS
                    ? "text-[#FF1010]"
                    : "",
                  item.status === OrderStatus.CANCELED ? "text-[#FF8024]" : ""
                )}
              >
                {item.status}
              </div>
            </div>
            <div className="flex pl-3 py-2 border-[1px] border-[#f3f3f3] items-center gap-[5.825vw]">
              <div className="min-w-[18.204vw] font-bold text-cardText">
                Delivery
              </div>
              <div className="text-[#A6A6A6]">
                will be delivered at: {item.delivery?.estimateTime} min for{" "}
                {item.delivery?.price} Mad, by {item.delivery?.label}
              </div>
            </div>
            <div className="flex pl-3 py-2 border-[1px] border-[#f3f3f3] items-center gap-[5.825vw]">
              <div className="min-w-[18.204vw] font-bold text-cardText">
                Price
              </div>
              <div className="text-[#A6A6A6]">{item.totalPrice} Mad</div>
            </div>
            <div className="flex pl-3 py-2 border-[1px] border-[#f3f3f3] items-center gap-[5.825vw]">
              <div className="min-w-[18.204vw] font-bold text-cardText">
                Shipping address:
              </div>
              <div className="text-[#A6A6A6]">{item.address}</div>
            </div>
            <div className="flex pl-3 py-2 border-[1px] border-[#f3f3f3] items-center gap-[5.825vw]">
              <div className="min-w-[18.204vw] font-bold text-cardText">
                Phone:
              </div>
              <div className="text-[#A6A6A6]">{item.phone}</div>
            </div>
            <div className="flex pl-3 py-2 border-[1px] border-[#f3f3f3] items-center gap-[5.825vw]">
              <div className="min-w-[18.204vw] font-bold text-cardText">
                Placed By:
              </div>
              <div className="text-[#A6A6A6]">
                {`${item.user?.firstName} ${item.user?.lastName}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
