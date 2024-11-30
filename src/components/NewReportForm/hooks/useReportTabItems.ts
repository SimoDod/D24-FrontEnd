import { TabsProps } from "antd";
import { useTranslation } from "react-i18next";
import { NewReportTabKeys } from "../types";

const useReportTabItems = () => {
  const { t } = useTranslation();

  return [
    {
      key: NewReportTabKeys.GENERAL_INFO,
      label: t(NewReportTabKeys.GENERAL_INFO),
    },
    {
      key: NewReportTabKeys.QUESTIONS,
      label: t(NewReportTabKeys.QUESTIONS),
    },
    {
      key: NewReportTabKeys.HUMAN_FACTOR,
      label: t(NewReportTabKeys.HUMAN_FACTOR),
    },
    {
      key: NewReportTabKeys.ATTACHMENTS,
      label: t(NewReportTabKeys.ATTACHMENTS),
    },
  ] as TabsProps["items"];
};

export default useReportTabItems;
