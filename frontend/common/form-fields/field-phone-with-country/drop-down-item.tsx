import * as React from "react";
// eslint-disable-next-line import/no-unresolved
// @ts-ignore
import { CountryCode } from "libphonenumber-js/types";
import { countries } from "country-data";
import { getCountryCallingCode } from "react-phone-number-input/input";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

type Props = {
  onClick: () => void;
  country: CountryCode;
};

export function DropDownItem({ onClick, country }: Props) {
  return (
    <div
      onClick={onClick}
      className="flex max-w-[100%] list-none gap-2 px-[2vw] py-[1vw] hover:bg-[#dadadb]"
    >
      {getUnicodeFlagIcon(country)}
      <div className="">
        {countries[country].name} ( + {getCountryCallingCode(country)} )
      </div>
    </div>
  );
}
