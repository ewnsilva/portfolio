import { ILayoutPalette } from "context";

const LightPrimaryColor = "#4b71c6";
const LightSecondaryColor = "#ffffff";
const LightBackgroundColor = "#ededed";
const LightPaperColor = "#ffffff";

const DarkPrimaryColor = "#E7EBF0";
const DarkSecondaryColor = "#E7EBF0";
const DarkBackgroundColor = "#1D2125";
const DarkPaperColor = "#2b2f33";

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
