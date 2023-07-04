import * as React from "react";
import { Outlet } from "react-router-dom";

export default function Meal() {
  return (
    <div className="py-12">
      <Outlet />
    </div>
  );
}
