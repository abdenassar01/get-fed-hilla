import * as React from "react";
import { TableRow } from "Frontend/views/admin/orders/table-row.js";
import Order from "Frontend/generated/com/lpw/getfed/models/Order.js";
import useFetch from "Frontend/utils/hooks/index.js";
import { OrderEndpoint } from "Frontend/generated/endpoints.js";
import { ComponentLoader } from "Frontend/common/index.js";
import Error from "Frontend/common/error/error.js";

export default function Orders() {
  const { data, loading, error } = useFetch<Order[]>(async () => {
    return await OrderEndpoint.getRestorantOrders(0, 20).then(
      (res) => res?.body
    );
  }, []);

  if (loading) return <ComponentLoader />;
  if (error) return <Error />;

  return (
    <div className="flex w-full flex-col gap-[32px] rounded-[8px] bg-white p-[2.222vw] sm:p-0">
      <div className="text-xbase font-bold text-cardText sm:text-[5.340vw]">
        Orders
      </div>
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
