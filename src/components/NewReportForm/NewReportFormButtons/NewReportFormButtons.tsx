import { Space } from "antd";
import ColorButton from "../../ColorButton/ColorButton";
import { Report, ReportStatus } from "../types";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { routePaths } from "../../../routerConfig";

type Props = {
  handleFormSubmit: (values: Report, status?: ReportStatus) => Promise<void>;
  report: Report;
  values: Report;
  isLoading: boolean;
};

const NewReportFormButtons = ({
  handleFormSubmit,
  report,
  values,
  isLoading,
}: Props) => {
  const { t } = useTranslation();
  const { reportNumber } = useParams();

  return (
    <Space wrap>
      {ReportStatus.CLOSED !== report.status && (
        <ColorButton
          onClick={() => handleFormSubmit(values)}
          color="green"
          disabled={isLoading}
        >
          {t("buttons.save")}
        </ColorButton>
      )}
      {ReportStatus.NEW === report.status && (
        <ColorButton
          onClick={() => handleFormSubmit(values, ReportStatus.SUBMITTED)}
          disabled={isLoading}
        >
          {t("buttons.submit")}
        </ColorButton>
      )}
      {ReportStatus.SUBMITTED === report.status && (
        <>
          <ColorButton
            onClick={() => handleFormSubmit(values, ReportStatus.NEW)}
            disabled={isLoading}
          >
            {t("buttons.unSubmit")}
          </ColorButton>
          <ColorButton
            onClick={() => handleFormSubmit(values, ReportStatus.REVIEWED)}
            disabled={isLoading}
          >
            {t("buttons.review")}
          </ColorButton>
        </>
      )}
      {ReportStatus.REVIEWED === report.status && (
        <>
          <ColorButton
            onClick={() => handleFormSubmit(values, ReportStatus.SUBMITTED)}
            disabled={isLoading}
          >
            {t("buttons.unReview")}
          </ColorButton>
          <ColorButton
            onClick={() => handleFormSubmit(values, ReportStatus.CLOSED)}
            color="red"
            disabled={isLoading}
          >
            {t("buttons.close")}
          </ColorButton>
        </>
      )}
      {reportNumber !== routePaths.learningReport.new && (
        <ColorButton
          onClick={() => handleFormSubmit(values)}
          color="red"
          disabled={isLoading}
        >
          {t("buttons.delete")}
        </ColorButton>
      )}
    </Space>
  );
};

export default NewReportFormButtons;
