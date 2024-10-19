import PageWrapper from "../../PageWrapper/PageWrapper";
import NewReportForm from "../../NewReportForm/NewReportForm";
import getLearningReportHeading from "../../../utils/learningReport/getLearningReportHeading";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LearningReportPage = () => {
  const { reportNumber } = useParams();
  const { t } = useTranslation();

  return (
    <PageWrapper title={getLearningReportHeading(reportNumber, t)}>
      <NewReportForm />
    </PageWrapper>
  );
};

export default LearningReportPage;
