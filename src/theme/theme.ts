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
      itemHoverBg: token.colorPrimary10,
      itemHoverColor: token.colorNeutral4,
    },
    Input: {
      paddingBlock: 10,
    },
    Select: {
      controlHeight: sizes.size * 10,
      optionPadding: sizes.size3x,
    },
    Button: {
      paddingBlock: sizes.size4x,
      colorBgBase: token.colorPrimary10,
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
    Card: {
      headerHeight: sizes.size * 12,
    },
    Radio: {
      radioSize: sizes.size6x,
      dotSize: sizes.size2x,
      colorPrimary: token.colorPrimary7,
    },
    Switch: {
      handleSize: sizes.size5x,
      innerMaxMargin: sizes.size4x,
      trackHeight: sizes.size6x,
      trackMinWidth: sizes.size * 12,
      colorPrimary: token.colorPrimary7,
    },
    DatePicker: {
      colorPrimary: token.colorPrimary7,
    },
    Statistic: {
      contentFontSize: sizes.size6x
    }
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
