import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { Control, useController } from "react-hook-form";
import draftToHtml from "draftjs-to-html";
import { ClassNames } from "Frontend/utils/classnames.js";
import { convertToRaw } from "draft-js";

type Props = {
  control: Control<any>;
  name: string;
  label: string;
  labelClassName?: string;
  className?: string;
  placeholder?: string;
  defaultValue?: string;
};

export function RichTextEditor({
  name,
  control,
  label,
  className,
  labelClassName,
  placeholder,
  defaultValue,
}: Props) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    control,
    name,
    defaultValue: defaultValue || "",
  });

  const hashConfig = {
    trigger: "#",
    separator: " ",
  };

  return (
    <div
      className={ClassNames("group relative flex w-[100%] flex-col", className)}
    >
      <label
        htmlFor={name}
        className={ClassNames(
          "mb-2 text-xs font-bold text-cardText sm:text-mb-xbase",
          labelClassName
        )}
      >
        {label}
      </label>
      <Editor
        toolbar={{
          options: ["inline", "list", "textAlign"],
          inline: {
            bold: { visible: true },
            italic: { visible: true },
            underline: { visible: true },
            strikeThrough: { visible: false },
          },
        }}
        toolbarClassName="border-[1px] border-[#F3F4F6] mb-0 rounded-ss-[10px] rounded-se-[10px]"
        wrapperClassName="bg-white"
        editorClassName="border-[1px] border-[#E6E6E6] bg-[#F3F4F6] px-[24px] py-[16px] rounded-es-[10px] rounded-ee-[10px]"
        placeholder={placeholder}
        onBlur={onBlur}
        onEditorStateChange={(e) =>
          onChange(draftToHtml(convertToRaw(e.getCurrentContent())))
        }
      />
      <span className="text-xxs text-error sm:text-mb-xs">
        {error?.message}
      </span>
    </div>
  );
}
