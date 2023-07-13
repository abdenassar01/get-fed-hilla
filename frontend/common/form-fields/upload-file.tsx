import { Control, useController } from "react-hook-form";
import React from "react";

type Props = {
  name: string;
  control: Control<any>;
  children: React.ReactNode;
  accept?: string;
};

export function UploadFile({
  name,
  control,
  accept = "image/*",
  children,
}: Props) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <label htmlFor={`file-${name}`}>
      {children}
      <input
        accept={accept}
        // @ts-ignore
        onChange={(e) => onChange(e.target.files[0])}
        onBlur={onBlur}
        type="file"
        name={name}
        id={`file-${name}`}
        className="hidden"
      />
      <p className="text-xxs text-error">{error?.message}</p>
    </label>
  );
}
