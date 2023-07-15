import * as React from "react";
import { HTMLProps, useEffect, useState } from "react";
import { Control, useController } from "react-hook-form";
import icon from "Frontend/assets/icons/password-toggle.svg";
import { ClassNames } from "Frontend/utils/classnames.js";

type Props = HTMLProps<HTMLInputElement> & {
  control: Control<any>;
  label: string;
  inputClassName?: string;
  className?: string;
  labelClassname?: string;
  defaultValue?: string | number;
};

export function TextInput({
  control,
  name,
  label,
  inputClassName,
  className,
  labelClassname,
  placeholder,
  type = "text",
  defaultValue,
}: Props) {
  const [isPassword, setIsPassword] = useState<boolean>(type === "password");
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    control,
    name: name || "text",
    defaultValue: defaultValue || "",
  });

  return (
    <div
      className={ClassNames(
        "group relative flex w-[100%] flex-col gap-2",
        className || ""
      )}
    >
      <label
        htmlFor={name}
        className={ClassNames(
          "text-xs font-bold text-cardText sm:text-mb-xbase",
          labelClassname || ""
        )}
      >
        {label}
      </label>
      <input
        id={name}
        onChange={onChange}
        value={value ? value : defaultValue}
        onBlur={onBlur}
        type={isPassword ? "password" : type}
        style={{ borderRadius: 8 }}
        className={ClassNames(
          "rounded-[10px] border-none bg-white px-[24px] py-[16px] text-xs leading-4 placeholder-[#A6A6A6] focus-visible:outline-none focus:shadow-md sm:p-[5.097vw] sm:text-mb-xxs",
          inputClassName || "",
          (error && "border-red-600") || ""
        )}
        placeholder={placeholder}
      />
      {type === "password" && (
        <img
          onClick={() => setIsPassword((prev) => !prev)}
          src={icon}
          alt="password toggle"
          className="absolute right-[2%] top-[42%]"
        />
      )}
      <p className="text-xxs text-error">{error?.message?.toString()}</p>
    </div>
  );
}
