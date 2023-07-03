import * as React from "react";
import { Control, useController } from "react-hook-form";
import { Checkbox } from "@hilla/react-components/Checkbox";

type Props = {
  label: string;
  name: string;
  checked?: boolean;
  control: Control<any>;
  className?: string;
};

export function CheckboxField({
  label,
  className,
  name,
  control,
  checked,
}: Props) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    control,
    name: name || "",
  });

  return (
    <Checkbox
      aria-errormessage={error?.message}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      checked={checked}
      className={className}
      name={name}
      label={label}
    />
  );
}
