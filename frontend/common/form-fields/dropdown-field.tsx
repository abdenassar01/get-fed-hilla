import React, { useRef, useState } from "react";
import { Control, useController } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";
import { ClassNames } from "Frontend/utils/classnames.js";
import { useOutsideClick } from "Frontend/common/index.js";

type Props = {
  control: Control<any>;
  label: string;
  name: string;
  placeholder?: string;
  items: {
    value: string | number;
    label: string;
  }[];
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  defaultValue?: string | number;
};

export function DropdownField({
  control,
  name,
  className,
  items,
  placeholder,
  label,
  labelClassName,
  wrapperClassName,
  defaultValue,
}: Props) {
  const dropdownRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    control,
    name: name || "",
    defaultValue: defaultValue || "",
  });
  useOutsideClick(dropdownRef, () => setOpenDropdown(false));

  return (
    <div
      ref={dropdownRef}
      className={ClassNames(
        "relative flex w-[100%] flex-col gap-2",
        wrapperClassName || ""
      )}
    >
      <label
        htmlFor={name}
        className={ClassNames(
          "text-xs font-bold text-cardText sm:text-mb-xxs",
          labelClassName || ""
        )}
      >
        {label}
      </label>
      <div
        onClick={() => setOpenDropdown((prev) => !prev)}
        className={ClassNames(
          "flex w-[100%] items-center justify-between rounded-[10px] border-none bg-[#F3F4F6] px-[24px] py-[14px] text-xs text-[#A6A6A6] sm:text-mb-xxs",
          className || "",
          (value || defaultValue) && "text-black",
          (error && "border-[1px] border-error") || ""
        )}
      >
        <div>{value?.label || defaultValue || placeholder || label}</div>
        <IoIosArrowDown />
      </div>
      <p className="mb-[-1.667vw] h-[1.667vw] text-xxs text-error">
        {error?.message}
      </p>
      <div
        className={ClassNames(
          "absolute top-[5.556vw] isolate z-[1000] h-[200px] w-full min-w-[22vw] cursor-pointer overflow-x-hidden rounded-[4px] bg-white shadow-md sm:top-[22.816vw] sm:w-[70vw]",
          (!openDropdown && "hidden") || ""
        )}
      >
        <div>
          {items.map((item) => (
            <div
              key={item.value}
              onClick={() => {
                onChange(item);
                setOpenDropdown(false);
              }}
              className="flex w-full px-[24px] py-[14px] hover:bg-[#dadadb]"
            >
              <div>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
