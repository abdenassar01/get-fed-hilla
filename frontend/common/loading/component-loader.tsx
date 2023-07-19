import { PacmanLoader } from "react-spinners";
import { ClassNames } from "Frontend/utils/classnames.js";

type Props = {
  className?: string;
};

export function ComponentLoader({ className }: Props) {
  return (
    <div
      className={ClassNames("w-full h-full text-main flex justify-center py-6")}
    >
      <PacmanLoader color="#FF385C" />
    </div>
  );
}
