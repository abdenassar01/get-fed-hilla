import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NoStyleLink } from "Frontend/common/no-style-link/no-style-link.js";
import { useUserStore } from "Frontend/stores/user-store.js";

function AdminLayout() {
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const { user, authenticated } = useUserStore();
  const pages = [
    {
      id: 1,
      link: "/admin/board",
      label: "Dashboard",
    },
    {
      id: 2,
      link: "/admin/managements",
      label: "Management",
    },
    {
      id: 3,
      link: "/admin/orders",
      label: "Orders",
    },
    {
      id: 4,
      link: "/admin/users",
      label: "Manage users",
    },
    {
      id: 6,
      link: "/admin/security",
      label: "Update password",
    },
  ];

  useEffect(() => {
    if (!authenticated) {
      return navigate("/login");
    }
    if (user.role !== "ADMIN") {
      return navigate("/error");
    }
    navigate("/admin/board");
  }, [authenticated]);

  return (
    <div className="bg-background py-4 min-h-[50vw]">
      <div className="container flex sm:flex-col">
        <div className="w-[19.444vw] sm:w-[100%]">
          <ul className="mt-[30px] sm:no-scrollbar w-full sm:flex sm:gap-[24px] sm:overflow-y-scroll">
            {pages.map((page) => (
              <li key={page.id} className="w-full text-base text-cardText">
                <NoStyleLink
                  link={page.link}
                  className="relative block h-full rounded-s-[8px] w-full whitespace-nowrap p-[1vw] sm:bg-background sm:px-[24px] sm:py-[20px] sm:text-mb-base"
                  activeClassName="prose-em:block bg-white board-link-active !text-main border-l-[12px] border-blue-500 font-normal sm:border-l-0 sm:border-b-[4px]"
                >
                  <em className="hidden absolute w-[24px] h-[24px] right-0 top-[-24px] bg-white" />
                  <div className="flex">
                    <img src="" alt="" className="" />
                    {page.label}
                  </div>
                  <em className="hidden absolute w-[24px] h-[24px] right-0 bottom-[-24px] bg-white" />
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
