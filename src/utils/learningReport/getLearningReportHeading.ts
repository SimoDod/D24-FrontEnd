import i18n from "../../localization/i18n";
import { routePaths } from "../../routerConfig";

const getLearningReportHeading = (
  reportNumber: number | string | undefined
) => {
  const isNewReport = reportNumber === routePaths.learningReport.new;

  return isNewReport
    ? `${i18n.t("commonWords.new")} ${i18n.t(routePaths.learningReport.label)}`
    : `${i18n.t(routePaths.learningReport.label)}: ${reportNumber}`;
};

export default getLearningReportHeading;
