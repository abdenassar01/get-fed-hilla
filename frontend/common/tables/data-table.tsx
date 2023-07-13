import * as React from "react";
import Meal from "Frontend/generated/com/lpw/getfed/models/Meal.js";
import { LongText } from "Frontend/common/long-text/index.js";

type Props = {
  header: string[];
  data: Meal[] | undefined;
};

export function DataTable({ header, data }: Props) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          {header.map((item) => (
            <th
              key={item}
              className="w-[8.611vw] border-r-[1px] border-[#E6E6E6] bg-[#F3F4F6] py-[0.938vw] text-center font-bold text-cardText"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="border-[1px] border-[#E6E6E6] text-xxs">
        {data?.map((row) => (
          <tr key={`table-row-meals-${row.id}`} className="text-cardText">
            <td className="border-r-[1px] border-t-[1px] whitespace-nowrap border-[#E6E6E6] py-[0.938vw] text-center">
              <div className="flex h-full w-fit items-center justify-center gap-[0.972vw] px-[0.972vw]">
                <img
                  src={row.image}
                  alt={row.title}
                  width={31}
                  height={31}
                  className="rounded-full"
                />
                <div>{row.title}</div>
              </div>
            </td>
            <td className="border-r-[1px] border-t-[1px] border-[#E6E6E6] py-[0.938vw] text-center">
              <LongText
                text={row.description || ""}
                nbrCharacteres={20}
                showBtnText={false}
              />
            </td>
            <td className="border-r-[1px] border-t-[1px] border-[#E6E6E6] py-[0.938vw] text-center">
              {row.dateCreated?.split("T")[0]}
            </td>
            <td className="border-r-[1px] border-t-[1px] border-[#E6E6E6] py-[0.938vw] text-center">
              {row.price}
            </td>
            <td className="border-r-[1px] border-t-[1px] border-[#E6E6E6] py-[0.938vw] text-center">
              {row.rating}
            </td>
            <td className="border-r-[1px] border-t-[1px] border-[#E6E6E6] py-[0.938vw] text-center">
              {row.category?.label}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
