import { TableProps, Tag } from "antd";
import { useTranslation } from "react-i18next";
import ColorButton from "../../ColorButton/ColorButton";
import { ReactNode } from "react";

type MaintenanceTableColumns = {
  name: string;
  techBuckets: string[];
  actions: ReactNode[];
};

export const useMaintenanceTable = (isSegment: boolean) => {
  const { t } = useTranslation();

  const techBucketsColumn = {
    title: t("Tech Buckets"),
    dataIndex: "techBuckets",
    key: "techBuckets",
    render: (techBuckets: string[]) =>
      techBuckets.map((techBucket) => <Tag key={techBucket}>{techBucket}</Tag>),
  };

  const columns: TableProps<MaintenanceTableColumns>["columns"] = [
    {
      title: t("Name"),
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    ...(isSegment ? [techBucketsColumn] : []),
    {
      title: t("Actions"),
      key: "actions",
      render: () => (
        <>
          <ColorButton
            color="red"
            onClick={() => {
              // Remove item
            }}
          >
            {t("Remove")}
          </ColorButton>
          <ColorButton
            color="orange"
            onClick={() => {
              // Edit item
            }}
          >
            {t("Edit")}
          </ColorButton>
        </>
      ),
    },
  ];

  return { columns };
};
