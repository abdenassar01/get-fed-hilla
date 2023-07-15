import * as React from "react";

export function Services() {
  const services = [
    {
      id: 1,
      img: "https://i.imgur.com/9z1P1uE.png",
      name: "Best Taste",
      description:
        "we offer the best taste in the town by the statement of our beloved clients.",
    },
    {
      id: 2,
      img: "https://i.imgur.com/7QAsPM2.png",
      name: "Fast Delivery",
      description:
        "we have two delivery services to get your order as fast as we possibly can.",
    },
    {
      id: 3,
      img: "https://i.imgur.com/rlU36S8.png",
      name: "Great Service",
      description:
        "we try to offer the best service, as we always work on the user experience and try to improve upon that ",
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
