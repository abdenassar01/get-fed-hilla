import router from "Frontend/routes.js";
import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.css";
import { useUserStore } from "Frontend/stores/user-store.js";
import { useEffect } from "react";
export default function App() {
  const { user, setUser } = useUserStore();

  useEffect(() => {
    if (!user) {
      if (sessionStorage.getItem("user") !== null) {
        console.log("setting the user");
        setUser(JSON.parse(sessionStorage.getItem("user") || ""));
      }
    }
  }, [user]);

  return <RouterProvider router={router} />;
}
