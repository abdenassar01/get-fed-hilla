import * as React from "react";
import { HTMLProps } from "react";
import { Control, useController } from "react-hook-form";
import { TextArea } from "@hilla/react-components/TextArea";
import { FormItem } from "@hilla/react-components/FormItem";

type Props = HTMLProps<HTMLInputElement> & {
  control: Control<any>;
  label: string;
  inputClassName?: string;
  className?: string;
  labelClassName?: string;
  maxLenght?: number;
};

export function TextAreaField({
  control,
  inputClassName,
  labelClassName,
  label,
  name,
  className,
  placeholder,
  maxLenght,
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
    <FormItem className={className}>
      <label className={labelClassName} slot="label">
        {label}
      </label>
      <TextArea
        placeholder={placeholder}
        onBlur={onBlur}
        onValueChanged={onChange}
        value={value}
        className={inputClassName}
        errorMessage={error?.message}
        helperText={`${value.length}/${charLimit}`}
      />
    </FormItem>
  );
}
