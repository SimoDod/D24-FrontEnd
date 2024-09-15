import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { routePaths } from "../../routerConfig";

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
        <Button onClick={handleErrorReset} type="primary">
          {t("errorPage.backButton")}
        </Button>
      }
    />
  );
};

export default ErrorFallback;
