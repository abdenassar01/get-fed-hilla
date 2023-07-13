import * as React from "react";
import { TableRow } from "Frontend/views/admin/orders/table-row.js";
import Order from "Frontend/generated/com/lpw/getfed/models/Order.js";
import useFetch from "Frontend/utils/hooks/index.js";
import { OrderEndpoint } from "Frontend/generated/endpoints.js";

export default function Orders() {
  // const data: Order[] = [
  //   {
  //     id: 1,
  //     status: OrderStatus.IN_PROGRESS,
  //     totalPrice: 200,
  //     dateCreated: "12-07-2023",
  //   },
  //   {
  //     id: 2,
  //     status: OrderStatus.IN_PROGRESS,
  //     totalPrice: 200,
  //     dateCreated: "12-07-2023",
  //   },
  //   {
  //     id: 3,
  //     status: OrderStatus.IN_PROGRESS,
  //     totalPrice: 200,
  //     dateCreated: "12-07-2023",
  //   },
  //   {
  //     id: 4,
  //     status: OrderStatus.IN_PROGRESS,
  //     totalPrice: 200,
  //     dateCreated: "12-07-2023",
  //   },
  // ];

  const { data, loading, error } = useFetch<Order[]>(async () => {
    return await OrderEndpoint.getRestorantOrders(0, 20).then(
      (res) => res?.body
    );
  }, []);

  return (
    <div className="flex w-full flex-col gap-[32px] rounded-[8px] bg-white p-[2.222vw] sm:p-0">
      <div className="text-xbase font-bold text-cardText sm:text-[5.340vw]">
        Orders
      </div>
      Dashboard
      <div className="">
        <ul className="">
          {data?.map((item) => (
            <TableRow key={`orders-table-row-${item.id}`} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
