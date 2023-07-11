import { MenuProps, ViewRouteObject } from "Frontend/routes.js";
import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Loading } from "Frontend/common/index.js";
import { useUserStore } from "Frontend/stores/user-store.js";

type MenuRoute = ViewRouteObject &
  Readonly<{
    path: string;
    handle: Required<MenuProps>;
  }>;

export default function MenuOnLeftLayout() {
  const { user, setUser, setAuthenticated, authenticated } = useUserStore();

  useEffect(() => {
    if (!authenticated) {
      if (sessionStorage.getItem("user") !== null) {
        const currentUser = JSON.parse(sessionStorage.getItem("user") || "");
        setUser(currentUser);
        setAuthenticated(true);
      }
    }
  }, []);

  return (
    <div className="text-sm sm:text-mb-xxs text-mainText">
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}
