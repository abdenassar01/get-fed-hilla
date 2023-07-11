import * as React from "react";
import { NoStyleLink } from "Frontend/common/no-style-link/no-style-link.js";

export default function Dashboard() {
  const cards = [
    {
      id: 1,
      title: "Orders",
      value: "5000 dh",
      link: "/admin/orders",
      linkText: "See orders",
    },
    {
      id: 2,
      title: "Meals",
      value: "12",
      link: "/admin/add-meal",
      linkText: "Manage meals",
    },
    {
      id: 3,
      title: "Users",
      value: "20",
      link: "/profile/users",
      linkText: "Manage users",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-[32px] rounded-[8px] bg-white p-[2.222vw] sm:p-0">
      <div className="text-xbase font-bold text-cardText sm:text-[5.340vw]">
        Dashboard
      </div>
      <div className="flex justify-between gap-[24px] sm:flex-col">
        {cards.map((item) => (
          <NoStyleLink
            key={item.id}
            link={item.link}
            className="relative flex w-full flex-col gap-[1.667vw] rounded-[4px] bg-background p-[14px] sm:w-full sm:gap-[2.222vw]"
          >
            <div className="">
              <div className="text-base text-cardText sm:text-mb-base">
                {item.title}
              </div>
              <div className="text-2xl font-bold text-main sm:text-[8.738vw]">
                {item.value}
              </div>
            </div>
            <div className="flex justify-between text-secondary">
              <div className="sm:text-mb-xbase">{item.linkText}</div>
              <img
                src="https://i.imgur.com/fgTg5Kk.png"
                alt="arrow right"
                className="w-[1.667vw] sm:w-[5.825vw]"
              />
            </div>
          </NoStyleLink>
        ))}
      </div>
      test
    </div>
  );
}
