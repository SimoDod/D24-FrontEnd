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
      icon: createElement(HomeFilled),
      label: t(routePaths.home.label),
      onClick: () => navigateAndSetMenuItemKey(routePaths.home.path),
    },
    {
      key: routePaths.releaseNotes.path,
      icon: createElement(InfoCircleFilled),
      label: t(routePaths.releaseNotes.label),
      onClick: () => navigateAndSetMenuItemKey(routePaths.releaseNotes.path),
    },
    {
      key: routePaths.learningReport.pathNew,
      icon: createElement(SnippetsFilled),
      label: t(routePaths.learningReport.label),
      onClick: () =>
        navigateAndSetMenuItemKey(routePaths.learningReport.pathNew),
    },
    {
      key: routePaths.allLearningReports.path,
      icon: createElement(FolderOpenFilled),
      label: t(routePaths.allLearningReports.label),
      onClick: () =>
        navigateAndSetMenuItemKey(routePaths.allLearningReports.path),
    },
    {
      key: routePaths.administrators.path,
      icon: createElement(AppstoreOutlined),
      label: t(routePaths.administrators.label),
      onClick: () => navigateAndSetMenuItemKey(routePaths.administrators.path),
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
