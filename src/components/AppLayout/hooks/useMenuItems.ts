import {
  AppstoreOutlined,
  HomeFilled,
  InfoCircleFilled,
  SnippetsFilled,
  FolderOpenFilled,
  EditOutlined,
} from "@ant-design/icons";
import { createElement } from "react";
import { ItemType } from "antd/es/menu/interface";
import { routePaths } from "../../../routerConfig";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const useMenuItems = (collapsed: boolean) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const menuItems: ItemType[] = [
    {
      type: "group",
      label: collapsed ? null : t("sider.home"),
      children: [
        {
          key: routePaths.home.path,
          icon: createElement(HomeFilled),
          label: collapsed ? null : t(routePaths.home.label),
          onClick: () => navigate(routePaths.home.path),
        },
      ],
    },
    {
      type: "group",
      label: collapsed ? null : t("sider.releases"),
      children: [
        {
          key: routePaths.releaseNotes.path,
          icon: createElement(InfoCircleFilled),
          label: collapsed ? null : t(routePaths.releaseNotes.label),
          onClick: () => navigate(routePaths.releaseNotes.path),
        },
      ],
    },
    {
      type: "group",
      label: collapsed ? null : t("sider.reports"),
      children: [
        {
          key: routePaths.learningReport.path,
          icon: createElement(SnippetsFilled),
          label: collapsed ? null : t(routePaths.learningReport.label),
          onClick: () => navigate(routePaths.learningReport.pathNew),
        },
        {
          key: routePaths.allLearningReports.path,
          icon: createElement(FolderOpenFilled),
          label: collapsed ? null : t(routePaths.allLearningReports.label),
          onClick: () => navigate(routePaths.allLearningReports.path),
        },
      ],
    },
    {
      type: "group",
      label: collapsed ? null : t("sider.administration"),
      children: [
        {
          key: routePaths.administrators.path,
          icon: createElement(AppstoreOutlined),
          label: collapsed ? null : t(routePaths.administrators.label),
          onClick: () => navigate(routePaths.administrators.path),
        },
        {
          key: routePaths.maintenance.path,
          icon: createElement(EditOutlined),
          label: collapsed ? null : t(routePaths.maintenance.label),
          onClick: () => navigate(routePaths.maintenance.path),
        },
      ],
    },
  ];

  return menuItems;
};

export default useMenuItems;
