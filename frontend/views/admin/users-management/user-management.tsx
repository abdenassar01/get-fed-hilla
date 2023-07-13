import { NoStyleLink } from "Frontend/common/no-style-link/no-style-link.js";
import { Outlet } from "react-router-dom";
import * as React from "react";
import useFetch from "Frontend/utils/hooks/index.js";
import Error from "Frontend/common/error/error.js";
import { ComponentLoader, UserDataTable } from "Frontend/common/index.js";
import User from "Frontend/generated/com/lpw/getfed/models/User.js";
import { UserEndpoint } from "Frontend/generated/endpoints.js";

export default function UserManagement() {
  const header = ["name", "username", "role", "address", "phone"];

  const { data, loading, error } = useFetch<User[]>(async () => {
    return await UserEndpoint.getPageUsers(0).then((res) => res?.body);
  }, []);

  if (loading) return <ComponentLoader />;
  if (error) return <Error />;

  return (
    <div className="flex w-full flex-col gap-[32px] rounded-[8px] bg-white p-[2.222vw] sm:p-0">
      <div className="text-xbase font-bold text-cardText sm:text-[5.340vw]">
        Users
      </div>
      <div className="w-full">
        <div className="my-3">
          <NoStyleLink
            className="bg-main px-[32px] transition-all ease-in delay-75 py-[7px] border-[1px] rounded-full border-main text-white hover:text-main hover:bg-[transparent]"
            link="/admin/managements/subcategories/new"
          >
            add new user
          </NoStyleLink>
        </div>

        <Outlet />
        {data && <UserDataTable header={header} data={data} />}
      </div>
    </div>
  );
}
