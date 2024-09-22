import PageWrapper from "../../PageWrapper/PageWrapper";
import NewReportForm from "../../NewReportForm/NewReportForm";
import getLearningReportHeading from "../../../utils/learningReport/getLearningReportHeading";
import { useParams } from "react-router-dom";

const LearningReportPage = () => {
  const { reportNumber } = useParams();

  return (
    <PageWrapper title={getLearningReportHeading(reportNumber)}>
      <NewReportForm />
    </PageWrapper>
  );
};

export default LearningReportPage;
