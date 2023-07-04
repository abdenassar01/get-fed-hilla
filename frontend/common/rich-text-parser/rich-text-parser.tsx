type Props = {
  text: string;
  className: string;
};

export function RichTextParser({ text, className }: Props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: text }}
      className={`${className} prose-p:mt-[10px]`}
    />
  );
}
