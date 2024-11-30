import { TFunction } from "i18next";
import { routePaths } from "../../routerConfig";

const getLearningReportHeading = (
  reportNumber: number | string | undefined,
  t: TFunction
) => {
  const isNewReport = reportNumber === routePaths.learningReport.new;

  return isNewReport
    ? `${t("commonWords.new")} ${t(routePaths.learningReport.label)}`
    : `${t(routePaths.learningReport.label)}: ${reportNumber}`;
};

export default getLearningReportHeading;
