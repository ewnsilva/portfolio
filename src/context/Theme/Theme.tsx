import { createContext, useMemo, useState, useEffect } from "react";

import { CssBaseline, useMediaQuery } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  useTheme,
} from "@mui/material/styles";

import { ILayoutPalette, ITheme } from "context";

import { DarkColor, DarkTheme, LightTheme } from "./Palette";

export const ThemeContext = createContext<ITheme>({} as ITheme);

export const ThemeProvider = ({ children }: any): any => {
  const [layout, setLayout] = useState<ILayoutPalette>({} as ILayoutPalette);

  const { palette, typography } = useTheme();

  const layoutIsEmpty = useMemo(
    () => Object.keys(layout).length === 0,
    [layout]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: layout.palette ?? palette,
        typography: layout.typography ?? typography,
      }),
    [layout.palette, layout.typography, palette, typography]
  );

  const darkMode = layout.palette?.primary.main === DarkColor;
  const themePreference = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    if (themePreference) {
      setLayout(DarkTheme);
    } else {
      setLayout(LightTheme);
    }
  }, [themePreference]);

  const changeTheme = (): void => {
    if (layout === LightTheme) {
      setLayout(DarkTheme);
    }
    if (layout === DarkTheme) {
      setLayout(LightTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        changeTheme,
        darkMode,
        layout,
        layoutIsEmpty,
        setLayout,
      }}
    >
      <CssBaseline />
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
