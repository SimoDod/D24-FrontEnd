import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routePaths } from "../../routerConfig";
import { useAppSelector } from "../../store/store";
import { getAuthToken } from "../../utils/authentication/authentication";

const AuthGuard = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.auth.token || getAuthToken());

  useEffect(() => {
    if (!token) {
      navigate(routePaths.login.path);
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
