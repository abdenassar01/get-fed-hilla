import * as React from "react";
import { Dialog } from "@hilla/react-components/Dialog";
import { useState } from "react";

type Props = {
  message: string;
  open?: boolean;
  status?: "success" | "warning" | "error" | "info";
};

export function Alert({ message, status = "info", open }: Props) {
  const [opened, setOpened] = useState<boolean>(open || false);

  return status === "info" ? (
    <div className="m-12 p-6 text-xxl text-center bg-background rounded-l text-secondary">
      {message}
    </div>
  ) : (
    <Dialog
      opened={opened}
      onOpenedChanged={() => setOpened((prev) => !prev)}
      header={<h3 className="m-auto capitalize">{status}</h3>}
    >
      <div className="">{message}</div>
    </Dialog>
  );
}
