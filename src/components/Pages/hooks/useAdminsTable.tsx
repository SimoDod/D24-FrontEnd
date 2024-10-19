import { TableProps, Tag } from "antd";
import { useTranslation } from "react-i18next";
import ColorButton from "../../ColorButton/ColorButton";
import { User, UserRole } from "../../../types/User";
import { useState } from "react";

const getAdminRoleColor = (role: UserRole) => {
  switch (role) {
    case UserRole.LOCAL_ADMIN:
      return "blue";
    case UserRole.CENTRAL_ADMIN:
      return "red";
    default:
      return "default";
  }
};

export const useAdminsTable = (data: User[]) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  const columns: TableProps<User>["columns"] = [
    //TODO translate
    {
      title: t("Username"),
      dataIndex: "username",
      key: "username",
      sorter: (a, b) => Number(a.username) - Number(b.username),
    },
    {
      title: t("Email"),
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: t("Role"),
      dataIndex: "role",
      key: "role",
      filters: [
        {
          text: t(`adminsPage.${UserRole.LOCAL_ADMIN}`),
          value: UserRole.LOCAL_ADMIN,
        },
        {
          text: t(`adminsPage.${UserRole.CENTRAL_ADMIN}`),
          value: UserRole.CENTRAL_ADMIN,
        },
      ],
      render: (_, { role }) => (
        <Tag color={getAdminRoleColor(role)}>{t(`adminsPage.${role}`)}</Tag>
      ),
      onFilter: (value, record) => record.role.indexOf(value as string) === 0,
    },
    {
      title: t("Actions"),
      key: "actions",
      render: () => (
        <ColorButton
          color="red"
          onClick={() => {
            // Remove admin role
          }}
        >
          {t("Remove")}
        </ColorButton>
      ),
    },
  ];

  const filteredTableData = data.filter(
    (user) =>
      user.role.toString().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toString().includes(searchTerm)
  );

  return { filteredTableData, columns, setSearchTerm };
};
