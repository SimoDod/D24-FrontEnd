import { TabsProps } from "antd";
import i18n from "../../../localization/i18n";

export enum NewReportTabKeys {
  GENERAL_INFO = "learningReportPage.generalInfo",
  QUESTIONS = "learningReportPage.questions",
  HUMAN_FACTOR = "learningReportPage.humanFactor",
  ATTACHMENTS = "learningReportPage.attachments",
}

export const newReportTabItems: TabsProps["items"] = [
  {
    key: NewReportTabKeys.GENERAL_INFO,
    label: i18n.t(NewReportTabKeys.GENERAL_INFO),
  },
  {
    key: NewReportTabKeys.QUESTIONS,
    label: i18n.t(NewReportTabKeys.QUESTIONS),
  },
  {
    key: NewReportTabKeys.HUMAN_FACTOR,
    label: i18n.t(NewReportTabKeys.HUMAN_FACTOR),
  },
  {
    key: NewReportTabKeys.ATTACHMENTS,
    label: i18n.t(NewReportTabKeys.ATTACHMENTS),
  },
];
