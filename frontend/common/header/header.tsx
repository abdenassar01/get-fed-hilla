import * as React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "Frontend/assets/images/logo.svg";
import { ClassNames } from "Frontend/utils/classnames.js";
import { useRef, useState } from "react";
import profile from "Frontend/assets/icons/profile.svg";
import { Button } from "Frontend/common/index.js";
import { useOnHoverOutside } from "Frontend/common/utils/hooks/index.js";

export function Header() {
  const [showProfileDropdown, setShowProfileDropdown] =
    useState<boolean>(false);
  const dropdownRef = useRef(null);
  const closeDropdown = () => {
    setShowProfileDropdown(false);
  };
  useOnHoverOutside(dropdownRef, closeDropdown);

  return (
    <header className="font-nova">
      <div className="container flex justify-between items-center">
        <img width={100} height={100} src={logo} alt="get fed" />
        <ul className="flex justify-between gap-[3vw]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                ClassNames(
                  "hover:text-main transition-all ease-in-out delay-100 font-bold text-black",
                  isActive ? "text-main underline" : ""
                )
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                ClassNames(
                  "hover:text-main transition-all ease-in-out delay-100 font-bold text-black",
                  isActive ? "text-main underline" : ""
                )
              }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/offers"
              className={({ isActive }) =>
                ClassNames(
                  "hover:text-main transition-all ease-in-out delay-100 font-bold text-black",
                  isActive ? "text-main underline" : ""
                )
              }
            >
              Offers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                ClassNames(
                  "hover:text-main transition-all ease-in-out delay-100 font-bold text-black",
                  isActive ? "text-main underline" : ""
                )
              }
            >
              About
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <Link
            className="px-[32px] py-[7px] rounded-[50px] bg-main text-white"
            to="/special-dishes"
          >
            special dishes
          </Link>
          <div
            className="profile-dropdown relative hover:after:block"
            ref={dropdownRef}
          >
            <div className="" onMouseMove={() => setShowProfileDropdown(true)}>
              <img
                className="w-[2.431vw] sm:w-[8.495vw]"
                src={profile}
                alt="language"
              />
            </div>
            <div
              onMouseLeave={() => setShowProfileDropdown(false)}
              className={ClassNames(
                "lng-dropdown w-[80px] absolute left-[-50%] top-[60px] z-40 flex flex-col rounded-[4px] bg-background py-[5px] shadow-md",
                (!showProfileDropdown && "invisible") || ""
              )}
            >
              <Button theme="tertiary" text="Log in" link="/login" />
              <Button theme="tertiary" text="Sign up" link="/login" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
