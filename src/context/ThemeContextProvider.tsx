import { createContext, useState, useEffect, PropsWithChildren } from "react";
import { ConfigProvider } from "antd";
import { generateTheme, themeConfig } from "../theme/theme";
import { ThemeType } from "../theme/types";

type ThemeContextProps = {
  themeType: ThemeType;
  toggleTheme: () => void;
};

const ThemeContextInitialState: ThemeContextProps = {
  themeType: ThemeType.DEFAULT,
  toggleTheme: () => {},
};

export const themeKey = "appTheme";
export const ThemeContext = createContext(ThemeContextInitialState);

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [themeType, setThemeType] = useState(
    (localStorage.getItem(themeKey) as ThemeType) ?? ThemeType.DEFAULT
  );

  const toggleTheme = () =>
    setThemeType(
      themeType === ThemeType.DARK ? ThemeType.DEFAULT : ThemeType.DARK
    );

  useEffect(() => {
    localStorage.setItem(themeKey, themeType);
  }, [themeType]);

  const { token, algorithm } = themeConfig[themeType];
  const theme = generateTheme(token, algorithm);

  return (
    <ThemeContext.Provider value={{ themeType, toggleTheme }}>
      <ConfigProvider componentSize="middle" theme={theme}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
