import { ILayoutPalette } from "context";

const LightPrimaryColor = "#169ecc";
const LightSecondaryColor = "#f2f2f2";
const LightBackgroundColor = "#e5e5e5";
const LightPaperColor = "#f2f2f2";

const DarkPrimaryColor = "#d8d8d8";
const DarkSecondaryColor = "#d8d8d8";
const DarkBackgroundColor = "#0e2933";
const DarkPaperColor = "#0e2933";

export const LightTheme: ILayoutPalette = {
  palette: {
    primary: {
      main: LightPrimaryColor,
    },
    secondary: {
      main: LightSecondaryColor,
    },
    background: {
      default: LightBackgroundColor,
      paper: LightPaperColor,
    },
  },
  typography: {
    fontFamily: "arial",
  },
};

export const DarkTheme: ILayoutPalette = {
  palette: {
    primary: {
      main: DarkPrimaryColor,
    },
    secondary: {
      main: DarkSecondaryColor,
    },
    background: {
      default: DarkBackgroundColor,
      paper: DarkPaperColor,
    },
    mode: "dark",
  },
  typography: {
    fontFamily: "arial",
    h4: {
      color: DarkSecondaryColor,
    },
    h5: {
      color: DarkSecondaryColor,
    },
    h6: {
      color: DarkSecondaryColor,
    },
    overline: {
      color: DarkSecondaryColor,
    },
    body1: {
      color: DarkSecondaryColor,
    },
    body2: {
      color: DarkSecondaryColor,
    },
  },
};

export const DarkColor = DarkTheme.palette?.primary.main;
