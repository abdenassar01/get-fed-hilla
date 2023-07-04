import * as React from "react";
import { useState } from "react";

import openIcon from "../../assets/icons/toggle-open.svg";
import closeIcon from "../../assets/icons/toggle-closed.svg";
import { ClassNames } from "Frontend/utils/classnames.js";

type Props = {
  question: string;
  answer: string;
  isOpen?: boolean;
  className?: string;
};

export function TextToggle({
  question,
  answer,
  isOpen = false,
  className,
}: Props) {
  const [open, setOpen] = useState<boolean>(isOpen);

  return (
    <div className="flex w-[100%] flex-col gap-[24px]">
      <button
        className="flex cursor-pointer justify-between"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div
          className={ClassNames(
            "text-xbase text-cardText sm:text-mb-base",
            open ? "sm:text-[5.340vw]" : ""
          )}
        >
          {question}
        </div>
        <img
          className="w-[0.976vw]"
          src={open ? closeIcon : openIcon}
          alt="toggle element"
        />
      </button>
      <div className="h-[1px] w-[100%] bg-lightGreen" />
      <div
        className={ClassNames(
          "grid grid-rows-[0fr] overflow-hidden transition-all duration-500 ease-in ",
          open ? "grid-rows-[1fr]" : ""
        )}
      >
        <div className="min-h-0">
          <div
            className={ClassNames(
              "mb-[24px] text-xs text-[#B7B7B7] sm:text-mb-xxs",
              className || ""
            )}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      </div>
    </div>
  );
}
