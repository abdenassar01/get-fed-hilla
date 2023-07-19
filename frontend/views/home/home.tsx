import * as React from "react";
import { Services, SpecialDishes } from "Frontend/views/home/sections/index.js";
import img from "../../assets/images/hero-section-blob.svg";
import { Button } from "Frontend/common/index.js";
export function Home() {
  return (
    <main className="bg-background bg-[url('https://i.imgur.com/o1oOjuM.png')] w-full bg-no-repeat bg-cover overflow-x-hidden">
      <div className="container flex flex-col gap-[2.361vw] items-center">
        <div className="flex items-center justify-between">
          <div className="w-[45vw] flex flex-col gap-[24px]">
            <h1 className="font-extrabold text-[4.167vw]">
              We make the best taste in town
            </h1>
            <p className="font-[300]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              consequatur fuga incidunt iste, iusto laboriosam odio qui quo vel
              voluptatibus! Cumque, sed, temporibus. Animi dicta dolorem eaque
              in itaque quo!
            </p>
            <div className="flex gap-[1.667vw]">
              <Button text="order now" link="/menu" />
              <Button text="about us" link="/about" theme="secondary" />
            </div>
          </div>
          <img src={img} alt="get fed" />
        </div>
        <Services />
        <SpecialDishes />
      </div>
    </main>
  );
}
