import { ILayoutPalette } from "context";

const LightPrimaryColor = "#005A74";
const LightSecondaryColor = "#C8F2FE";
const LightBackgroundColor = "#A9DBFE";
const LightPaperColor = "#97D1F7";

const DarkPrimaryColor = "#d8d8d8";
const DarkSecondaryColor = "#d8d8d8";
const DarkBackgroundColor = "#00466B";
const DarkPaperColor = "#004C72";

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
    h4: {
      color: LightPrimaryColor,
    },
    h5: {
      color: LightPrimaryColor,
    },
    h6: {
      color: LightPrimaryColor,
    },
    overline: {
      color: LightPrimaryColor,
    },
    body1: {
      color: LightPrimaryColor,
    },
    body2: {
      color: LightPrimaryColor,
    },
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
