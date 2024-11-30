import {
  AppstoreOutlined,
  EditOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  SnippetsOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { createElement } from "react";
import { ItemType } from "antd/es/menu/interface";
import { routePaths } from "../../../routerConfig";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { menuItemKey } from "../constants";
import { UserRole } from "../../../types/User";

const useMenuItems = (userRole = UserRole.USER) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigateAndSetMenuItemKey = (keyPath: string) => {
    navigate(keyPath);
    localStorage.setItem(menuItemKey, keyPath);
  };

  const adminMenuItems: ItemType[] = [
    {
      key: routePaths.admins.path,
      icon: createElement(AppstoreOutlined),
      label: t(routePaths.admins.label),
      onClick: () => navigateAndSetMenuItemKey(routePaths.admins.path),
    },
    {
      key: routePaths.maintenance.path,
      icon: createElement(EditOutlined),
      label: t(routePaths.maintenance.label),
      onClick: () => navigateAndSetMenuItemKey(routePaths.maintenance.path),
    },
  ];

  const menuItems: ItemType[] = [
    {
      key: routePaths.home.path,
      icon: createElement(HomeOutlined),
      label: t(routePaths.home.label),
      onClick: () => navigateAndSetMenuItemKey(routePaths.home.path),
    },
    {
      key: routePaths.releaseNotes.path,
      icon: createElement(InfoCircleOutlined),
      label: t(routePaths.releaseNotes.label),
      onClick: () => navigateAndSetMenuItemKey(routePaths.releaseNotes.path),
    },
    {
      key: routePaths.learningReport.pathNew,
      icon: createElement(SnippetsOutlined),
      label: t(routePaths.learningReport.label),
      onClick: () =>
        navigateAndSetMenuItemKey(routePaths.learningReport.pathNew),
    },
    {
      key: routePaths.allLearningReports.path,
      icon: createElement(FolderOutlined),
      label: t(routePaths.allLearningReports.label),
      onClick: () =>
        navigateAndSetMenuItemKey(routePaths.allLearningReports.path),
    },
  ];

  return [
    ...menuItems,
    ...(userRole === UserRole.CENTRAL_ADMIN ? adminMenuItems : []),
  ];
};

export default useMenuItems;
