import * as React from 'react';

import {FaCartPlus} from "react-icons/fa";

import {Link} from "react-router-dom";

import star from "../../assets/images/icons/star.svg";

type Props = {
    id: number,
    img: string,
    title: string,
    description: string,
    rating: number,
    price: number,
};

//  "https://i.imgur.com/OJ6nb6i.png"

export function DishCard({ img, id, rating, price, description, title }: Props) {
    return (
        <div className="mt-[25%] flex flex-col items-center w-[20.833vw] text-center bg-white shadow rounded-[10px] p-[10px]">
            <img src="https://i.imgur.com/OJ6nb6i.png" alt={title} width={194} height={194} className="mt-[-25%]" />
            <h2 className="font-bold mt-[10px] text-xl">{title}</h2>
            <div className="text-sm font-[200] py-[20px]" dangerouslySetInnerHTML={{ __html: description }} />
            <div className="flex justify-between w-[100%]">
                <div className="flex gap-[0.278vw] items-center">
                    {
                        [...Array(rating)].map(index => (
                            <img key={index} className="w-[1.042vw]" src={star} alt="rating star" />
                        ))
                    }
                    <div className="font-semibold">{rating}</div>
                </div>
                <div className="text-main flex">
                    <s className="text-xl">{ price }</s>
                    <p className="xbase font-medium">/{ price - 2 }MAD</p>
                </div>
            </div>
            <div className="flex mt-[20px] justify-end items-center gap-[10px] w-[100%]">
                <Link to={`/meal/${id}`} className="text-main transition-all ease-in delay-75 border-b-[transparent] border-b-[2px] hover:border-b-main">see details</Link>
                <button className="px-[18px] py-[3px] transition-all ease-in delay-75 flex items-center border-[1px] border-main gap-[4px] bg-main rounded-[50px] text-white hover:text-main hover:bg-[transparent]">
                    <FaCartPlus size={24} />
                    add to cart
                </button>
            </div>
        </div>
    );
};