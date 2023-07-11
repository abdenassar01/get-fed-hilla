import { MenuProps, ViewRouteObject } from "Frontend/routes.js";
import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Loading } from "Frontend/common/index.js";
import { NoStyleLink } from "Frontend/common/no-style-link/no-style-link.js";

type MenuRoute = ViewRouteObject &
  Readonly<{
    path: string;
    handle: Required<MenuProps>;
  }>;

export default function MenuOnLeftLayout() {
  return (
    <div className="text-sm sm:text-mb-xxs text-mainText">
      <NoStyleLink link="/admin">admin</NoStyleLink>
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}
