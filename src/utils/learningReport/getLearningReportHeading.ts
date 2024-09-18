import i18n from "../../localization/i18n";
import { routePaths } from "../../routerConfig";

const getLearningReportHeading = (
  isNewReport: boolean,
  reportNumber: number | string | undefined
) => {
  return isNewReport
    ? `${i18n.t(routePaths.learningReport.label)}: ${reportNumber}`
    : `${i18n.t("commonWords.new")} ${i18n.t(routePaths.learningReport.label)}`;
};

export default getLearningReportHeading;
