import * as React from "react";
import { HTMLProps } from "react";
import { Control, useController } from "react-hook-form";
import { ClassNames } from "Frontend/utils/classnames.js";

type Props = HTMLProps<HTMLInputElement> & {
  control: Control<any>;
  label: string;
  inputClassName?: string;
  className?: string;
  maxLenght?: number;
  labelClassName?: string;
};

export function TextAreaField({
  control,
  inputClassName,
  label,
  name,
  className,
  placeholder,
  maxLenght,
  labelClassName,
}: Props) {
  const {
    field: { value, onBlur, onChange },
    fieldState: { error },
  } = useController({
    control,
    name: name || "",
  });

  const charLimit = maxLenght || 200;
  return (
    <div className="flex w-[100%] flex-col ">
      <label
        htmlFor={name}
        className={ClassNames(
          "mb-2 text-xs font-bold text-cardText sm:text-mb-xbase",
          labelClassName || ""
        )}
      >
        {label}
      </label>
      <textarea
        rows={4}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={{ borderRadius: 4 }}
        className={ClassNames(
          "rounded-[10px] border-none bg-white px-6 py-4 placeholder-[#A6A6A6]",
          className || "",
          (error && "border-red-600") || ""
        )}
        placeholder={placeholder}
      />
      <p className="mb-[-1.667vw] h-[1.667vw] text-xxs text-error">
        {error?.message?.toString()}
      </p>
    </div>
  );
}
