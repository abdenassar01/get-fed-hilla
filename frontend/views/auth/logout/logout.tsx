import { useEffect } from "react";
import { logout } from "@hilla/frontend";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "Frontend/stores/user-store.js";

export default function Logout() {
  const navigate = useNavigate();
  const { setAuthenticated, setUser } = useUserStore();
  useEffect(() => {
    logout().then(() => {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("role");
      setAuthenticated(false);
      setUser({});
      return navigate("/");
    });
  }, []);
  return null;
}
