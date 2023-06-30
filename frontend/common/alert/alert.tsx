import * as React from "react";

type Props = {
  message: string;
  status?: "success" | "warning" | "error" | "info";
};

export function Alert({ message, status = "info" }: Props) {
  return status === "info" ? (
    <div className="m-12 p-6 text-xxl text-center bg-background rounded-l text-secondary">
      {message}
    </div>
  ) : (
    <div>modal</div>
  );
}
