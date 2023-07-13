import User from "Frontend/generated/com/lpw/getfed/models/User.js";

type Props = {
  header: string[];
  data: User[] | undefined;
};

export function UserDataTable({ header, data }: Props) {
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
            <td className="border-r-[1px] border-t-[1px] border-[#E6E6E6] py-[0.938vw] text-center">
              {`${row.firstName} ${row.lastName}`}
            </td>
            <td className="border-r-[1px] border-t-[1px] border-[#E6E6E6] py-[0.938vw] text-center">
              {row.username}
            </td>
            <td className="border-r-[1px] border-t-[1px] border-[#E6E6E6] py-[0.938vw] text-center">
              {row.role}
            </td>
            <td className="border-r-[1px] border-t-[1px] border-[#E6E6E6] py-[0.938vw] text-center">
              {row.address}
            </td>
            <td className="border-r-[1px] border-t-[1px] border-[#E6E6E6] py-[0.938vw] text-center">
              {row.phone}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
