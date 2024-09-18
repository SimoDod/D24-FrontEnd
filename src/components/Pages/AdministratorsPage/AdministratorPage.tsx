import { useTranslation } from "react-i18next";
import { routePaths } from "../../../routerConfig";
import PageWrapper from "../../PageWrapper/PageWrapper";

const AdministratorPage = () => {
  const { t } = useTranslation();
  return <PageWrapper title={t(routePaths.administrators.label)}></PageWrapper>;
};

export default AdministratorPage;
