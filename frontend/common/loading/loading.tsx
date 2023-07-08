import { PacmanLoader } from "react-spinners";
import { ProgressBar } from "@hilla/react-components/ProgressBar";

export const Loading = ({ size = 40 }: { size?: number }) => {
  return (
    <>
      <ProgressBar color="#FF385C" indeterminate={true} className="m-0" />
      <div className="w-full flex items-center justify-center bg-background min-h-[80vh]">
        <PacmanLoader size={size} color="#FF385C" />
      </div>
    </>
  );
};
