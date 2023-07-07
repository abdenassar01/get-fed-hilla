import React from "react";
import { Control, Controller } from "react-hook-form";
import { ClassNames } from "Frontend/utils/classnames.js";

type InputProps = {
  control: Control<any>;
  name: string;
  label: string;
  tabs: {
    id: number;
    jsx: JSX.Element;
  }[];
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
      defaultValue={`${name}-0`}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <div className="flex w-[100%] flex-col">
          <div className="py-[0.972vw] text-cardText">{label}</div>
          <div
            className={ClassNames(
              "flex justify-between",
              wrapperClassName || ""
            )}
          >
            {tabs.map((tab, index) => (
              <div key={index}>
                <label>
                  <input
                    name={`${name}-${tab.id}`}
                    onChange={() => onChange([...value, tab.id])}
                    value={tab.id}
                    onBlur={onBlur}
                    type="checkbox"
                    className="hidden"
                  />
                  <div
                    className={ClassNames(
                      "min-h-[6.597vw] w-[13.264vw] rounded-[8px] bg-[#F3F4F6] px-[1.875vw] py-[1.285vw] text-cardText",
                      className || "",
                      (value === `${name}-${index}` &&
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
