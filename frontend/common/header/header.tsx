import * as React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "Frontend/assets/images/logo.svg";
import { ClassNames } from "Frontend/utils/classnames.js";
import { useRef, useState } from "react";
import profile from "Frontend/assets/icons/profile.svg";
import { Button } from "Frontend/common/index.js";
import { useOnHoverOutside } from "Frontend/utils/hooks/index.js";
import { BsBasket2Fill } from "react-icons/bs";
import { useCartStore } from "Frontend/stores/cart-store.js";
import { logout } from "@hilla/frontend";

export function Header() {
  const headerLinks = [
    {
      id: 1,
      label: "Home",
      link: "/",
    },
    {
      id: 2,
      label: "Menu",
      link: "/menu",
    },
    {
      id: 3,
      label: "Drink",
      link: "/drink",
    },
    {
      id: 4,
      label: "Offers",
      link: "/offers",
    },
    {
      id: 5,
      label: "About",
      link: "/about",
    },
  ];

  const [showProfileDropdown, setShowProfileDropdown] =
    useState<boolean>(false);
  const dropdownRef = useRef(null);
  const closeDropdown = () => {
    setShowProfileDropdown(false);
  };
  useOnHoverOutside(dropdownRef, closeDropdown);
  const { meals, drinks } = useCartStore();
  return (
    <header className="font-nova bg-background">
      <div className="container flex justify-between items-center">
        <img width={100} height={100} src={logo} alt="get fed" />
        <ul className="flex justify-between gap-[3vw]">
          {headerLinks.map((link) => (
            <li key={"header-link-" + link.id}>
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  ClassNames(
                    "hover:text-main transition-all ease-in-out delay-100 font-bold text-black",
                    isActive ? "text-main underline" : ""
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                ClassNames(
                  "hover:text-main transition-all ease-in-out delay-100 font-bold text-black",
                  isActive ? "text-main underline" : ""
                )
              }
            >
              <div
                className={ClassNames(
                  "relative ",
                  meals.length + drinks.length > 0 ? "cart-nav-item" : ""
                )}
                after-data={meals.length + drinks.length}
              >
                <BsBasket2Fill size={18} />
              </div>
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <Link
            className="px-[32px] py-[7px] rounded-[50px] bg-main text-white"
            to="/custom-meal"
          >
            Customize Meal
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
              <Button theme="tertiary" text="Sign up" link="/register" />
              <Button theme="tertiary" text="logout" link="/logout" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
