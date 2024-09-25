import { TableProps, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routePaths } from "../../../routerConfig";
import ColorButton from "../../ColorButton/ColorButton";
import { Report, ReportStatus } from "../../NewReportForm/types";
import { format } from "date-fns";
import { dateFormats } from "../../DatePicker/constants";
import { reportTabKey } from "../../NewReportForm/constants";
import { NewReportTabKeys } from "../LearningReportPage/constants";
import { menuItemKey } from "../../AppLayout/constants";
import { useState } from "react";

const getStatusButtonColor = (status: ReportStatus) => {
  switch (status) {
    case ReportStatus.NEW:
      return "green";
    case ReportStatus.SUBMITTED:
      return "blue";
    case ReportStatus.REVIEWED:
      return "magenta";
    case ReportStatus.CLOSED:
      return "red";
    default:
      return "default";
  }
};

export const useLearningReportsTable = (data: Report[]) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const columns: TableProps<Report>["columns"] = [
    //TODO translate
    {
      title: t("Report Number"),
      dataIndex: "reportNumber",
      key: "reportNumber",
      width: 130,
      align: "center",
      sorter: (a, b) => Number(a.reportNumber) - Number(b.reportNumber),
    },
    {
      title: t("Segment"),
      dataIndex: "segment",
      key: "segment",
      align: "center",
      sorter: (a, b) => a.segment.localeCompare(b.segment),
    },
    {
      title: t("SO Number"),
      dataIndex: "soNumber",
      key: "soNumber",
      align: "center",
      width: 130,
      sorter: (a, b) => Number(a.soNumber) - Number(b.soNumber),
    },
    {
      title: t("ASML Office"),
      dataIndex: "asmlOffice",
      key: "asmlOffice",
      align: "center",
      sorter: (a, b) => a.segment.localeCompare(b.segment),
    },
    {
      title: t("Date of Craftsmanship"),
      dataIndex: "timestampCraftsmanship",
      key: "timestampCraftsmanship",
      align: "center",
      width: 150,
      render: (date) => format(date, dateFormats.displayComplete),
      sorter: (a, b) => {
        const dateA = new Date(
          a.timestampCraftsmanship ? a.timestampCraftsmanship : 0
        );
        const dateB = new Date(
          b.timestampCraftsmanship ? b.timestampCraftsmanship : 0
        );
        return dateA.getTime() - dateB.getTime();
      },
    },
    {
      title: t("Status"),
      dataIndex: "status",
      key: "status",
      align: "center",
      width: 150,
      filters: [
        {
          text: ReportStatus.NEW,
          value: ReportStatus.NEW,
        },
        {
          text: ReportStatus.SUBMITTED,
          value: ReportStatus.SUBMITTED,
        },
        {
          text: ReportStatus.REVIEWED,
          value: ReportStatus.REVIEWED,
        },
        {
          text: ReportStatus.CLOSED,
          value: ReportStatus.CLOSED,
        },
      ],
      render: (_, { status }) => (
        <Tag color={getStatusButtonColor(status)}>{status}</Tag>
      ),
      onFilter: (value, record) => record.status.indexOf(value as string) === 0,
    },
    {
      title: t("Actions"),
      key: "actions",
      align: "center",
      width: 120,
      render: (_, { reportNumber }) => (
        <ColorButton
          onClick={() => {
            localStorage.setItem(reportTabKey, NewReportTabKeys.GENERAL_INFO);
            localStorage.setItem(
              menuItemKey,
              routePaths.learningReport.pathNew
            );
            navigate(routePaths.learningReport.path + reportNumber);
          }}
        >
          {t("Edit")}
        </ColorButton>
      ),
    },
  ];

  const filteredTableData = data.filter(
    (report) =>
      report.reportNumber.toString().includes(searchTerm) ||
      report.segment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.soNumber.toString().includes(searchTerm) ||
      report.asmlOffice.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { filteredTableData, columns, setSearchTerm };
};
