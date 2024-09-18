import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routePaths } from "../../routerConfig";
import { useAppSelector } from "../../store/store";
import { getAuthToken } from "../../utils/authentication/authentication";

const GuestGuard = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.auth.token || getAuthToken());

  useEffect(() => {
    if (token) {
      navigate(routePaths.home.path);
    }
  }, [token, navigate]);

  return !token ? children : null;
};

export default GuestGuard;
