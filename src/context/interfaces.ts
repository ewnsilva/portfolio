import { Dispatch, SetStateAction } from "react";

import { TypographyOptions } from "@mui/material/styles/createTypography";
import { PaletteMode } from "@mui/material";

export interface ILayoutPalette {
  palette: IPalette;
  typography?: TypographyOptions;
}

export interface ITheme {
  darkMode: boolean;
  layout: ILayoutPalette;
  layoutIsEmpty: boolean;
  setLayout: Dispatch<SetStateAction<ILayoutPalette>>;
  changeTheme: () => void;
}

interface IBackground {
  default: string;
  paper: string;
}

interface IColor {
  main: string;
}

interface IPalette {
  background: IBackground;
  mode?: PaletteMode;
  primary: IColor;
  secondary: IColor;
}
