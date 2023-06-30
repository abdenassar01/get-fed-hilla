import * as React from "react";
import { Outlet } from "react-router-dom";

export function Meal() {
  return (
    <div>
      Meals
      <Outlet />
    </div>
  );
}
