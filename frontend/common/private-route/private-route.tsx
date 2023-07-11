import { ReactNode, useEffect } from "react";
import { useUserStore } from "Frontend/stores/user-store.js";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
  roleAllowed?: string;
};

export function PrivateRoute({ children, roleAllowed }: Props) {
  const navigate = useNavigate();
  const { authenticated, user } = useUserStore();

  useEffect(() => {
    if (!authenticated) {
      console.log("redirected to /login");
      navigate("/login");
    }
    if (roleAllowed) {
      if (user.role !== roleAllowed) {
        navigate("/error");
      }
    }
  }, [authenticated]);

  return <>{children}</>;
}
