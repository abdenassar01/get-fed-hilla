import * as React from "react";
import { Control, useController } from "react-hook-form";
import { ClassNames } from "Frontend/utils/classnames.js";
import { IoIosCheckmark } from "react-icons/io";

type Props = {
  label: string;
  name: string;
  checked?: boolean;
  control: Control<any>;
  className?: string;
  activeClassName?: string;
};

export function CheckboxField({
  label,
  className,
  name,
  control,
  checked,
  activeClassName,
}: Props) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    control,
    name: name || "",
  });

  return (
    <div className={ClassNames("flex flex-col", className || "")}>
      <label>
        <input
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          type="checkbox"
          className="hidden"
        />
        <div className="flex gap-[0.972vw]">
          <div
            className={ClassNames(
              "flex h-[1.528vw] w-[1.528vw] items-center justify-center rounded-[4px] border-[1px] border-cardText sm:h-[5.340vw] sm:min-w-[5.340vw]",
              value && "border-main bg-main"
            )}
          >
            {value && <IoIosCheckmark size={30} color="white" />}
          </div>
          <div
            className={ClassNames(
              "text-cardText sm:text-mb-xxs",
              value && activeClassName
            )}
          >
            {label}
          </div>
        </div>
      </label>
      <p className="mb-[-1.667vw] h-[1.667vw] text-xxs text-error">
        {error?.message?.toString()}
      </p>
    </div>
  );
}
