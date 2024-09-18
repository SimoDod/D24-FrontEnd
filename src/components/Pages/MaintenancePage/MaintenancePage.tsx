import { useTranslation } from "react-i18next";
import { routePaths } from "../../../routerConfig";
import PageWrapper from "../../PageWrapper/PageWrapper";

const MaintenancePage = () => {
  const { t } = useTranslation();
  return <PageWrapper title={t(routePaths.maintenance.label)}></PageWrapper>;
};

export default MaintenancePage;
