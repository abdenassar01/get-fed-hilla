import Placeholder from "Frontend/components/placeholder/Placeholder.js";
import { MenuProps, ViewRouteObject } from "Frontend/routes.js";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "Frontend/common/index.js";

type MenuRoute = ViewRouteObject &
  Readonly<{
    path: string;
    handle: Required<MenuProps>;
  }>;

export default function MenuOnLeftLayout() {
  return (
    <div className="text-sm sm:text-mb-xxs text-mainText">
      <Header />
      <Suspense fallback={<Placeholder />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}
