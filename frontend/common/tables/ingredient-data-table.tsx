import Ingredient from "Frontend/generated/com/lpw/getfed/models/Ingredient.js";
import * as React from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {
  header: string[];
  data: Ingredient[] | undefined;
};

export function IngredientDataTable({ header, data }: Props) {
  const navigate = useNavigate();
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
          <tr key={`table-row-ingredients-${row.id}`} className="text-cardText">
            <td className="border-r-[1px] border-t-[1px] whitespace-nowrap border-[#E6E6E6] py-[0.938vw] text-center">
              <div className="flex h-full w-fit items-center justify-center gap-[0.972vw] px-[0.972vw]">
                <img
                  src={row.image}
                  alt={row.label}
                  width={31}
                  height={31}
                  className="rounded-full"
                />
                <div>{row.label}</div>
              </div>
            </td>
            <td className="border-r-[1px] border-t-[1px] border-[#E6E6E6] py-[0.938vw] text-center">
              {row.price || 0}
            </td>
            <td className="border-r-[1px] border-t-[1px] border-[#E6E6E6] py-[0.938vw] text-center">
              {row.subCategory?.title}
            </td>
            <td className="border-r-[1px] border-t-[1px] border-[#E6E6E6] py-[0.938vw] text-center">
              <button
                className="text-main"
                onClick={() =>
                  navigate("/admin/managements/ingredients/update", {
                    state: { id: row.id },
                  })
                }
              >
                <FaEdit size={24} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
