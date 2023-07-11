import * as React from "react";
import { TableRow } from "Frontend/views/admin/orders/table-row.js";
import Order from "Frontend/generated/com/lpw/getfed/models/Order.js";
import OrderStatus from "Frontend/generated/com/lpw/getfed/models/enums/OrderStatus.js";

export default function Orders() {
  const data: Order[] = [
    {
      id: 1,
      status: OrderStatus.IN_PROGRESS,
      totalPrice: 200,
      dateCreated: "12-07-2023",
    },
    {
      id: 2,
      status: OrderStatus.IN_PROGRESS,
      totalPrice: 200,
      dateCreated: "12-07-2023",
    },
    {
      id: 3,
      status: OrderStatus.IN_PROGRESS,
      totalPrice: 200,
      dateCreated: "12-07-2023",
    },
    {
      id: 4,
      status: OrderStatus.IN_PROGRESS,
      totalPrice: 200,
      dateCreated: "12-07-2023",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-[32px] rounded-[8px] bg-white p-[2.222vw] sm:p-0">
      <div className="text-xbase font-bold text-cardText sm:text-[5.340vw]">
        Orders
      </div>
      Dashboard
      <div className="">
        <ul className="">
          {data.map((item) => (
            <TableRow key={`orders-table-row-${item.id}`} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
