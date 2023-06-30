import * as React from "react";

export function Services() {
  const services = [
    {
      id: 1,
      img: "https://i.imgur.com/9z1P1uE.png",
      name: "Best Taste",
      description:
        "we offer the worst tast in the town we are known to be the best over a decate now.",
    },
    {
      id: 2,
      img: "https://i.imgur.com/7QAsPM2.png",
      name: "Fast Delivery",
      description:
        "we offer the best tast in the town we are known to be the best over a decate now.",
    },
    {
      id: 3,
      img: "https://i.imgur.com/rlU36S8.png",
      name: "Best Taste",
      description:
        "we offer the best tast in the town we are known to be the best over a decate now.",
    },
  ];

  return (
    <div className="flex justify-between w-[73.056vw]">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-col text-center gap-[16px] items-center w-[16.250vw]"
        >
          <img src={service.img} alt="best tast" />
          <h2 className="text-xxl">{service.name}</h2>
          <p className="font-[300]">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
