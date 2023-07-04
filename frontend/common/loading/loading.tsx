import { PacmanLoader } from "react-spinners";

export const Loading = ({ size = 40 }: { size?: number }) => {
  return (
    <div className="w-full flex justify-center">
      <PacmanLoader size={size} color="#2374E1" />
    </div>
  );
};
