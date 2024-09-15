import {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from "react";
import { ConfigProvider } from "antd";
import { generateTheme, themeConfig } from "../theme/theme";
import { ThemeType } from "../theme/types";

type ThemeContextProps = {
  themeType: ThemeType;
  setThemeType: Dispatch<SetStateAction<ThemeType>>;
};

const themeKey = "appTheme";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [themeType, setThemeType] = useState(() => {
    const storedTheme = localStorage.getItem(themeKey);

    return (storedTheme as ThemeType) ?? ThemeType.DEFAULT;
  });

  useEffect(() => {
    localStorage.setItem(themeKey, themeType);
  }, [themeType]);

  const { token, algorithm } = themeConfig[themeType];
  const theme = generateTheme(token, algorithm);

  return (
    <ThemeContext.Provider value={{ themeType, setThemeType }}>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};
