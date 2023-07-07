import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { ClassNames } from "Frontend/utils/classnames.js";

type Props = {
  className?: string;
  children: ReactNode;
  link: string;
  activeClassName?: string;
};

export function NoStyleLink({
  link,
  className,
  activeClassName,
  children,
}: Props) {
  return (
    <NavLink
      className={({ isActive }) =>
        ClassNames(
          "no-underline text-mainText hover:no-underline",
          className || "",
          (isActive && activeClassName) || ""
        )
      }
      to={link}
    >
      {children}
    </NavLink>
  );
}
