import { MappingAlgorithm, theme } from "antd";
import { ExtendedAliasToken, ExtendedThemeConfig, ThemeType } from "./types";
import defaultToken from "../theme/tokens/defaultToken";
import darkToken from "../theme/tokens/darkToken";
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
    },
    Menu: {
      itemHoverBg: token.colorNeutral10,
      itemHoverColor: token.colorNeutral5,
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
