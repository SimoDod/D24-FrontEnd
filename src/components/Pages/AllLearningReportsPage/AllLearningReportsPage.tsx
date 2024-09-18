import { useTranslation } from "react-i18next";
import { routePaths } from "../../../routerConfig";
import PageWrapper from "../../PageWrapper/PageWrapper";

const AllLearningReportsPage = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper title={t(routePaths.allLearningReports.label)}></PageWrapper>
  );
};

export default AllLearningReportsPage;
