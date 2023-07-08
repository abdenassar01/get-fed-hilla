import { PacmanLoader } from "react-spinners";

export const Loading = ({ size = 40 }: { size?: number }) => {
  return (
    <div className="w-full flex justify-center min-h-[80vh]">
      <PacmanLoader size={size} color="#FF385C" />
    </div>
  );
};
