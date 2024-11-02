import {
  LogoutOutlined,
  MoonOutlined,
  SettingOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";
import classes from "./FloatButtonGroup.module.scss";
import useLogout from "../../../hooks/useLogout";
import { ThemeType } from "../../../theme/types";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContextProvider";
import { languages } from "../../../localization/constants";
import i18n from "../../../localization/i18n";

const FloatButtonGroup = () => {
  const logout = useLogout();
  const { toggleTheme, themeType } = useContext(ThemeContext);
  const { changeLanguage, language } = i18n;

  return (
    <FloatButton.Group
      trigger="click"
      type="primary"
      className={classes.settingsFloatButton}
      icon={<SettingOutlined />}
    >
      <FloatButton onClick={logout} icon={<LogoutOutlined />} />
      <FloatButton
        onClick={toggleTheme}
        icon={
          themeType === ThemeType.DEFAULT ? <SunOutlined /> : <MoonOutlined />
        }
      />
      {languages.map(
        ({ shortName }) =>
          language !== shortName && (
            <FloatButton
              key={shortName}
              onClick={() => changeLanguage(shortName)}
              icon={shortName}
            />
          )
      )}
    </FloatButton.Group>
  );
};

export default FloatButtonGroup;
