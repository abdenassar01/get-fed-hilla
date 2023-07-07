import React from "react";
import { Control, Controller } from "react-hook-form";
import { ClassNames } from "Frontend/utils/classnames.js";
import { IoIosCloseCircle } from "react-icons/io";

type InputProps = {
  control: Control<any>;
  name: string;
  label: string;
  tabs:
    | {
        id: number | undefined;
        jsx: JSX.Element | undefined;
      }[]
    | undefined;
  className?: string;
  wrapperClassName?: string;
};

export function PackSelector({
  control,
  name,
  label,
  className,
  tabs,
  wrapperClassName,
}: InputProps) {
  return (
    <Controller
      control={control}
      defaultValue={[]}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <div className="flex flex-col">
          <div className="py-[0.972vw] text-cardText">{label}</div>
          <div
            className={ClassNames(
              "flex justify-between",
              wrapperClassName || ""
            )}
          >
            {tabs?.map((tab, index) => (
              <div className="relative" key={index}>
                {value.filter((item: number) => item === tab.id).length !==
                  0 && (
                  <div
                    onClick={() =>
                      onChange(value.filter((item: number) => item !== tab.id))
                    }
                    className="absolute top-1 right-3 text-white"
                  >
                    <IoIosCloseCircle size={24} />
                  </div>
                )}
                <label htmlFor={`${name}-${tab.id}`}>
                  <input
                    onChange={() => onChange([...value, tab.id])}
                    name={`${name}-${tab.id}`}
                    id={`${name}-${tab.id}`}
                    onBlur={onBlur}
                    type="checkbox"
                    className="hidden"
                  />
                  <div
                    className={ClassNames(
                      "min-h-[6.597vw] w-[13.264vw] bg-white rounded-[8px] px-[1.875vw] py-[1.285vw] text-cardText",
                      className || "",
                      (value.filter((item: number) => item === tab.id)
                        .length !== 0 &&
                        "!border-none !bg-secondary !text-white") ||
                        ""
                    )}
                  >
                    {tab.jsx}
                  </div>
                </label>
              </div>
            ))}
            <div className="text-xxs text-error">{error?.message}</div>
          </div>
        </div>
      )}
    />
  );
}
