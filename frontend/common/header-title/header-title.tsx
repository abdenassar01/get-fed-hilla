import * as React from "react";

import separator from "../../assets/images/icons/separator.svg";
import { ClassNames } from "Frontend/utils/classnames.js";

type Props = {
  title: string;
  subTitle?: string;
  titleColor?: string;
  subTitleColor?: string;
  className?: string;
};

export function HeaderTitle({
  titleColor,
  title,
  subTitle,
  subTitleColor,
  className,
}: Props) {
  return (
    <div className={ClassNames("flex flex-col items-center", className || "")}>
      <h1 className="text-2xl text-secondary" style={{ color: titleColor }}>
        {title}
      </h1>
      <img src={separator} className="" alt={title} />
      <p className="text-base" style={{ color: subTitleColor }}>
        {subTitle}
      </p>
    </div>
  );
}
