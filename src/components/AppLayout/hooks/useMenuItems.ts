import {
  AppstoreOutlined,
  EditOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  SnippetsTwoTone,
  FolderOpenTwoTone,
} from "@ant-design/icons";
import { createElement } from "react";
import { ItemType } from "antd/es/menu/interface";
import { routePaths } from "../../../routerConfig";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { menuItemKey } from "../constants";

const useMenuItems = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigateAndSetMenuItemKey = (keyPath: string) => {
    navigate(keyPath);
    localStorage.setItem(menuItemKey, keyPath);
  };

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
      icon: createElement(SnippetsTwoTone),
      label: t(routePaths.learningReport.label),
      onClick: () =>
        navigateAndSetMenuItemKey(routePaths.learningReport.pathNew),
    },
    {
      key: routePaths.allLearningReports.path,
      icon: createElement(FolderOpenTwoTone),
      label: t(routePaths.allLearningReports.label),
      onClick: () =>
        navigateAndSetMenuItemKey(routePaths.allLearningReports.path),
    },
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

  return menuItems;
};

export default useMenuItems;
