import { MappingAlgorithm, theme } from "antd";
import { ExtendedAliasToken, ExtendedThemeConfig, ThemeType } from "./types";
import defaultToken from "../theme/tokens/defaultToken";
import darkToken from "../theme/tokens/darkToken";
import { sizes } from "./variables";
const { darkAlgorithm, defaultAlgorithm } = theme;

export const generateTheme = (
  token: ExtendedAliasToken,
  algorithm: MappingAlgorithm
): ExtendedThemeConfig => ({
  token,
  components: {
    Layout: {
      siderBg: token.colorNeutral1,
      triggerBg: token.colorPrimary10,
      headerBg: token.colorBgLayout,
      colorBgLayout: token.colorBgLayout,
      headerColor: token.colorPrimary1,
    },
    Menu: {
      itemHoverColor: token.colorPrimary7,
      horizontalItemSelectedColor: token.colorPrimary8,
    },
    Input: {
      controlHeight: sizes.size * 9,
    },
    Select: {
      controlHeight: sizes.size * 9,
    },
    Button: {
      colorBgBase: token.colorPrimary10,
      controlHeight: sizes.size * 9,
    },
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: 0,
      fontSizeHeading1: sizes.size8x,
      fontSizeHeading2: sizes.size7x,
      fontSizeHeading3: sizes.size6x,
      fontSizeHeading4: sizes.size5x,
      fontSizeHeading5: sizes.size4x,
    },
    Tabs: {
      colorBorderSecondary: token.colorPrimary8,
      inkBarColor: token.colorPrimary7,
      itemSelectedColor: token.colorPrimary7,
      itemHoverColor: token.colorPrimary8,
    },
    Radio: {
      radioSize: sizes.size6x,
      dotSize: sizes.size2x,
      colorPrimary: token.colorPrimary7,
    },
    Switch: {
      colorPrimary: token.colorPrimary7,
    },
    DatePicker: {
      colorPrimary: token.colorPrimary7,
    },
    Progress: {
      defaultColor: token.colorPrimary7,
    },
  },
  algorithm,
  cssVar: true,
});

export const themeConfig = {
  [ThemeType.DEFAULT]: {
    token: defaultToken,
    algorithm: defaultAlgorithm,
  },
  [ThemeType.DARK]: {
    token: darkToken,
    algorithm: darkAlgorithm,
  },
};
