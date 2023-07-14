import { NoStyleLink } from "Frontend/common/no-style-link/no-style-link.js";
import { Outlet } from "react-router-dom";
import * as React from "react";
import useFetch from "Frontend/utils/hooks/index.js";
import Error from "Frontend/common/error/error.js";
import {
  Alert,
  ComponentLoader,
  UserDataTable,
} from "Frontend/common/index.js";
import User from "Frontend/generated/com/lpw/getfed/models/User.js";
import { UserEndpoint } from "Frontend/generated/endpoints.js";

export default function UserManagement() {
  const header = ["name", "username", "role", "address", "phone"];

  const { data, loading, error } = useFetch<User[]>(async () => {
    return await UserEndpoint.getPageUsers(0).then((res) => res);
  }, []);

  if (loading) return <ComponentLoader />;
  if (error) return <Alert message="fetching users fialed" status="error" />;

  return (
    <div className="flex w-full flex-col gap-[32px] rounded-[8px] bg-white p-[2.222vw] sm:p-0">
      <div className="text-xbase font-bold text-cardText sm:text-[5.340vw]">
        Users
      </div>
      <div className="w-full min-h-[50vh]">
        {data && <UserDataTable header={header} data={data} />}
      </div>
    </div>
  );
}
