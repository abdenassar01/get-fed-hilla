import React from "react";
import { Control, Controller } from "react-hook-form";
import { ClassNames } from "Frontend/utils/classnames.js";
import { IoIosCloseCircle } from "react-icons/io";
import Ingredient from "Frontend/generated/com/lpw/getfed/models/Ingredient.js";

type InputProps = {
  control: Control<any>;
  name: string;
  label: string;
  tabs:
    | {
        ingredient: Ingredient | undefined;
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
          <div className="text-cardText">{label}</div>
          <div
            className={ClassNames(
              "flex justify-between",
              wrapperClassName || ""
            )}
          >
            {tabs?.map((tab, index) => (
              <div className="relative" key={index}>
                {value.filter(
                  (ingredient: Ingredient) =>
                    ingredient.id === tab?.ingredient?.id
                ).length !== 0 && (
                  <div
                    onClick={() =>
                      onChange(
                        value.filter(
                          (ingredient: Ingredient) =>
                            ingredient.id !== tab?.ingredient?.id
                        )
                      )
                    }
                    className="absolute top-1 right-3 text-white"
                  >
                    <IoIosCloseCircle size={24} />
                  </div>
                )}
                <label htmlFor={`${name}-${tab.ingredient?.id}`}>
                  <input
                    onChange={() => onChange([...value, tab.ingredient])}
                    name={`${name}-${tab.ingredient?.id}`}
                    id={`${name}-${tab.ingredient?.id}`}
                    onBlur={onBlur}
                    type="checkbox"
                    className="hidden"
                  />
                  <div
                    className={ClassNames(
                      "min-h-[6.597vw] w-[13.264vw] bg-white rounded-[8px] px-[1.875vw] py-[1.285vw] text-cardText",
                      className || "",
                      (value.filter(
                        (ingredient: Ingredient) =>
                          ingredient.id === tab.ingredient?.id
                      ).length !== 0 &&
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
