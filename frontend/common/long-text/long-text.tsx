import * as React from "react";
import { useState } from "react";
import { truncate } from "Frontend/utils/truncate-html.js";
import { RichTextParser } from "Frontend/common/index.js";
import { ClassNames } from "Frontend/utils/classnames.js";

type Props = {
  text: string;
  nbrCharacteres: number;
  className?: string;
  showBtnText?: boolean;
};

export function LongText({
  text,
  nbrCharacteres,
  className,
  showBtnText = true,
}: Props) {
  const [displayedText, setDisplayedText] = useState<string>(
    truncate(text, nbrCharacteres)
  );

  const [buttonText, setButtonText] = useState<string>("Voir plus");

  function toggleShowenText() {
    if (displayedText === text) {
      setDisplayedText(truncate(text, nbrCharacteres));
      setButtonText("Voir plus");
    } else {
      setDisplayedText(text);
      setButtonText("Voir moins");
    }
  }

  return (
    <div>
      <RichTextParser
        text={displayedText}
        className={ClassNames(
          "text-xs prose-p:text-xs !bg-[transparent]",
          className || ""
        )}
      />
      {showBtnText && (
        <button
          className="text-secondary sm:text-mb-xs"
          onClick={toggleShowenText}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
