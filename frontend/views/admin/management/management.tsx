import * as React from "react";
import { useEffect, useState } from "react";
import { NoStyleLink } from "Frontend/common/no-style-link/no-style-link.js";
import { Outlet, useNavigate } from "react-router-dom";

export default function Management() {
  const navigate = useNavigate();
  const tabs = [
    {
      id: 1,
      label: "meals",
      link: "/admin/managements/meals",
    },
    {
      id: 2,
      label: "drinks",
      link: "/admin/managements/drinks",
    },
    {
      id: 3,
      label: "sub categories",
      link: "/admin/managements/subcategories",
    },
    {
      id: 4,
      label: "ingredients",
      link: "/admin/managements/ingredients",
    },
  ];

  useEffect(() => {
    navigate("/admin/managements/meals");
  }, []);

  return (
    <div className="w-full min-h-[70vh]">
      <div className="flex gap-4 bg-background pl-6">
        {tabs.map((tab) => (
          <NoStyleLink
            key={`managements-tabs-${tab.id}`}
            className="relative block h-full rounded-ss-[8px] rounded-se-[8px] whitespace-nowrap p-[1vw]"
            activeClassName="prose-em:block bg-white tab-link-active text-[#2D54DE]  font-normal sm:border-l-0 sm:border-b-[4px]"
            link={tab.link}
          >
            <em className="hidden absolute w-[24px] h-[24px] left-[-24px] bottom-0 bg-white" />
            {tab.label}
            <em className="hidden absolute w-[24px] h-[24px] right-[-24px] bottom-0 bg-white" />
          </NoStyleLink>
        ))}
      </div>
      <div className="p-4 rounded-[8px] bg-white">
        <Outlet />
      </div>
    </div>
  );
}
