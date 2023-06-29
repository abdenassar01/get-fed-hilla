import * as React from 'react';
import {Link} from "react-router-dom";
import {Services, SpecialDishes} from "Frontend/views/home/sections/index.js";
import img  from "../../assets/images/hero-section-blob.svg"
export function Home() {
    return (
        <main className="bg-[url('https://i.imgur.com/o1oOjuM.png')] w-full bg-no-repeat bg-contain overflow-x-hidden">
            <div className="container flex flex-col gap-[2.361vw] items-center">
                <div className="flex items-center justify-between">
                    <div className="w-[45vw] flex flex-col gap-[24px]">
                        <h1 className="font-extrabold text-[4.167vw]">We make the best taste in town</h1>
                        <p className="font-[300]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur fuga incidunt iste, iusto laboriosam odio qui quo vel voluptatibus! Cumque, sed, temporibus. Animi dicta dolorem eaque in itaque quo!
                        </p>
                        <div className="flex gap-[1.667vw]">
                            <Link to="/menu" className="bg-main px-[32px] py-[7px] border-[1px] rounded-[50px] border-main text-white hover:text-main hover:bg-[transparent]">Order Now</Link>
                            <Link to="/about" className="border-[1px] border-main py-[8px] px-[32px] rounded-[50px] text-main hover:text-white hover:bg-main">About Us</Link>
                        </div>
                    </div>
                    <img src={img} alt="get fed" />
                </div>
                <Services />
                <SpecialDishes />
            </div>
        </main>
    );
};