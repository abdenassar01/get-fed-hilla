import logo from "Frontend/assets/icons/logo.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import * as React from "react";
import { Link } from "react-router-dom";

type Props = {
  links: {
    label: string;
    link: string;
    isActive?: boolean;
  }[];
  truncate?: boolean;
};

export function NavigatorHeader({ links, truncate }: Props) {
  function truncateString(str: string, num: number): string {
    if (str.length > num) {
      return `${str.slice(0, num)}...`;
    }
    return str;
  }

  return (
    <div className="flex w-fit">
      <img
        className="relative z-10 w-[3.194vw] sm:w-[9.709vw]"
        src={logo}
        alt="khabiry logo"
      />
      <div className="ml-[-5%] flex bg-[#F3F4F6] pl-[2.222vw] text-xs sm:pl-[7.767vw] sm:text-mb-xxs">
        {links.map((link) =>
          link.isActive ? (
            <Link
              key={link.label}
              to={link.link}
              className="flex items-center gap-[0.556vw] bg-secondary p-[0.556vw] text-white sm:p-[1.942vw]"
            >
              {link.label}
            </Link>
          ) : (
            <Link
              key={link.label}
              to={link.link}
              className="flex items-center gap-[0.556vw] bg-[#F3F4F6] p-[0.556vw] text-cardText"
            >
              {truncate ? truncateString(link.label, 9) : link.label}
              <MdKeyboardArrowRight size={16} />
            </Link>
          )
        )}
      </div>
    </div>
  );
}
