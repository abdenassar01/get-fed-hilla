import React from "react";
import { Outlet } from "react-router-dom";
import { NoStyleLink } from "Frontend/common/no-style-link/no-style-link.js";

function AdminLayout() {
  const pages = [
    {
      id: 1,
      link: "/admin/board",
      label: "Dashboard",
    },
    {
      id: 2,
      link: "/admin/add-meal",
      label: "Add new meal",
    },
    {
      id: 3,
      link: "/admin/orders",
      label: "My orders",
    },
    {
      id: 4,
      link: "/admin/users",
      label: "Manage users",
    },
    {
      id: 6,
      link: "/profile/security",
      label: "Update password",
    },
  ];

  return (
    <div className="bg-background py-4">
      <div className="container flex sm:flex-col">
        <div className="w-[19.444vw] sm:w-[100%]">
          <ul className="sm:no-scrollbar w-full sm:flex sm:gap-[24px] sm:overflow-y-scroll">
            {pages.map((page) => (
              <li key={page.id} className="w-full text-base text-cardText">
                <NoStyleLink
                  link={page.link}
                  className="block h-full rounded-s-[8px] w-full whitespace-nowrap p-[1.667vw] sm:bg-background sm:px-[24px] sm:py-[20px] sm:text-mb-base"
                  activeClassName="bg-white !text-main border-l-[8px] border-blue-500 font-normal sm:border-l-0 sm:border-b-[4px]"
                >
                  {page.label}
                </NoStyleLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
