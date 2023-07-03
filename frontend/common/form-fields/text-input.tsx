import * as React from "react";
import { HTMLProps } from "react";
import { Control, useController } from "react-hook-form";
import { FormItem } from "@hilla/react-components/FormItem";
import { TextField } from "@hilla/react-components/TextField";

type Props = HTMLProps<HTMLInputElement> & {
  control: Control<any>;
  label: string;
  inputClassName?: string;
  className?: string;
  labelClassName?: string;
  suffix?: string;
};

export function TextInput({
  control,
  name,
  label,
  inputClassName,
  labelClassName,
  className,
  suffix,
  placeholder,
}: Props) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    control,
    name: name || "text",
  });

  return (
    <FormItem className={className}>
      <label className={labelClassName} slot="label">
        {label}
      </label>
      <TextField
        className={inputClassName}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        errorMessage={error?.message}
      >
        <span slot="suffix">{suffix}</span>
      </TextField>
    </FormItem>
  );
}
