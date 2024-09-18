import { Result } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { routePaths } from "../../routerConfig";
import ColorButton from "../ColorButton/ColorButton";

export type ErrorFallbackProps = {
  resetError?: () => void;
  errorMessage?: "errorMessage" | "wrongPath";
};

const ErrorFallback = ({
  resetError,
  errorMessage = "errorMessage",
}: ErrorFallbackProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleErrorReset = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    resetError && resetError();

    navigate(routePaths.home.path);
  };

  return (
    <Result
      status="404"
      subTitle={t(`errorPage.${errorMessage}`)}
      extra={
        <ColorButton onClick={handleErrorReset}>
          {t("buttons.backButton")}
        </ColorButton>
      }
    />
  );
};

export default ErrorFallback;
