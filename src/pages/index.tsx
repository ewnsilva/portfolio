import { JSX } from "react";

import { Box } from "@mui/material";
import {
  About,
  Contact,
  NavigationButtons,
  Header,
  Home,
  Projects,
  Technologies,
} from "components";

export const Portfolio = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "background.default",
        rowGap: 5,
      }}
    >
      <Header />
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <NavigationButtons />
    </Box>
  );
};
