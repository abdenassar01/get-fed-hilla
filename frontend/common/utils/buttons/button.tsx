import * as React from "react";
import { Link } from "react-router-dom";
import { ClassNames } from "Frontend/utils/classnames.js";

type Props = {
  link?: string;
  onClick?: () => void;
  className?: string;
  text: string;
  theme?: "primary" | "secondary" | "tertiary";
};

export function Button({
  text,
  link,
  onClick,
  className,
  theme = "primary",
}: Props) {
  return !link ? (
    <button
      onClick={onClick}
      className={ClassNames(
        "text-center",
        theme === "primary"
          ? "bg-main px-[32px] transition-all ease-in delay-75 py-[7px] border-[1px] rounded-full border-main text-white hover:text-main hover:bg-[transparent]"
          : theme === "secondary"
          ? "px-[32px] py-[7px] transition-all ease-in delay-75  bg-[transparent] !text-main hover:!text-white hover:bg-main bg-main border-[1px] rounded-full border-main  hover:bg-[transparent]"
          : "p-0 bg-[transparent] transition-all ease-in delay-75 text-main hover:border-b-[1px] hover:border-b-main",
        className || ""
      )}
    >
      {text}
    </button>
  ) : (
    <Link
      to={link || ""}
      className={ClassNames(
        "text-center",
        theme === "primary"
          ? "bg-main px-[32px] transition-all ease-in delay-75 py-[7px] border-[1px] rounded-full border-main text-white hover:text-main hover:bg-[transparent]"
          : theme === "secondary"
          ? "px-[32px] py-[7px] transition-all ease-in delay-75  !bg-[transparent] !text-main hover:!text-white hover:!bg-main bg-main border-[1px] rounded-full border-main  hover:bg-[transparent]"
          : "p-0 bg-[transparent] transition-all ease-in delay-75 !text-main hover:border-b-[1px] hover:border-b-main",
        className || ""
      )}
    >
      <div>{text}</div>
    </Link>
  );
}
