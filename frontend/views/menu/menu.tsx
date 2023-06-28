import * as React from 'react';
import {IoFastFoodSharp} from "react-icons/io5";
import {useState} from "react";
import {HeaderTitle} from "Frontend/common/index.js";
// import {IconBase} from "react-icons";
// import {FaIcons} from "react-icons/fa";

export function Menu() {

    const [currentCategory, setCurrentCategory] = useState<string>("All");
    const categories = [
        {
            id: 1,
            label: "Dinner",
            icon: "MdDinnerDining"
        },
        {
            id: 2,
            label: "Breakfast",
            icon: "MdFreeBreakfast"
        },
        {
            id: 3,
            label: "Lunch",
            icon: "MdLunchDining"
        },
        {
            id: 4,
            label: "Lavarege",
            icon: "MdEmojiFoodBeverage"
        },
        {
            id: 5,
            label: "Dessert",
            icon: "GiFruitBowl"
        },
    ]

    return (
        <div className="py-[3.819vw]">
            <div className="container flex flex-col items-center">
                <HeaderTitle title="Menu" />
                <div className="mt-[1.5vw] flex gap-[24px]">
                    <button
                        onClick={() => setCurrentCategory("All")}
                        className={
                        // clsx({
                            "px-[32px] py-[10px] gap-[10px] font-bold w-[11.389vw] text-main flex justify-center items-center rounded-[50px] border-[1px] border-main hover:text-white hover:bg-main"
                            // "text-white bg-main": (currentCategory === "All")
                        // })
                    }>
                        <IoFastFoodSharp size={20} />
                       <span className="mb-[-3px]">All</span>
                    </button>
                    {
                        categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setCurrentCategory(category.label)}
                                className={ "px-[32px] py-[10px] gap-[10px] font-bold w-[11.389vw] text-main flex justify-center items-center rounded-[50px] border-[1px] border-main hover:text-white hover:bg-main text-white bg-main"}>
                                {/*<Icon nameIcon={category.icon} propsIcon={{size: 20}} />*/}
                                {/*<IconBase  name={category.icon} size={20} />*/}
                                <span className="mb-[-3px]">{category.label}</span>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};