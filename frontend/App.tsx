import router from "Frontend/routes.js";
import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.css";
import { useUserStore } from "Frontend/stores/user-store.js";
import { useEffect } from "react";
export default function App() {
  const { user, setUser, setAuthenticated, authenticated } = useUserStore();

  useEffect(() => {
    if (!authenticated) {
      if (sessionStorage.getItem("user") !== null) {
        const currentUser = JSON.parse(sessionStorage.getItem("user") || "");
        setUser(currentUser);
        setAuthenticated(true);
      }
    }
  }, [authenticated, user]);
  return <RouterProvider router={router} />;
}
