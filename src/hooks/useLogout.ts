import { useNavigate } from "react-router-dom";
import { routePaths } from "../routerConfig";
import { clearAuthSession } from "../utils/authentication/authentication";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    clearAuthSession();
    navigate(routePaths.login.path);
  };

  return logout;
};

export default useLogout;
