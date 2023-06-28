import * as React from 'react';
import {Link, NavLink} from "react-router-dom";

import logo from "../../assets/images/logo.svg"
import {ClassNames} from "Frontend/utils/classnames.js";

export function Header() {
    return (
        <header className="font-nova">
            <div className="container flex justify-between items-center">
                <img width={100} height={100} src={logo} alt="get fed" />
                <ul className="flex justify-between gap-[3vw]">
                    <li><NavLink to="/" className={({isActive}) => ClassNames("hover:text-main transition-all ease-in-out delay-100 font-bold text-black", isActive && "text-main underline")} >Home</NavLink></li>
                    <li><NavLink to="/menu" className={({isActive}) => ClassNames("hover:text-main transition-all ease-in-out delay-100 font-bold text-black", isActive && "text-main underline")} >Menu</NavLink></li>
                    <li><NavLink to="/offers" className={({isActive}) => ClassNames("hover:text-main transition-all ease-in-out delay-100 font-bold text-black", isActive && "text-main underline")} >Offers</NavLink></li>
                    <li><NavLink to="/foor" className={({isActive}) => ClassNames("hover:text-main transition-all ease-in-out delay-100 font-bold text-black", isActive && "text-main underline")}>Food</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) => ClassNames("hover:text-main transition-all ease-in-out delay-100 font-bold text-black", isActive && "text-main underline")} >About</NavLink></li>
                    </ul>
                <Link className="px-[32px] py-[7px] rounded-[50px] bg-main text-white" to="/special-dishes">special dishes</Link>
            </div>
        </header>
    );
};