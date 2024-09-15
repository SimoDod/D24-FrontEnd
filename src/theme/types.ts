import { ThemeConfig } from "antd";

export type ExtendedAliasToken = Record<string, string>;

export type ExtendedThemeConfig = ThemeConfig & {
  token?: Partial<ExtendedAliasToken>;
};

export enum ThemeType {
  DEFAULT = "Default",
  DARK = "Dark",
}
