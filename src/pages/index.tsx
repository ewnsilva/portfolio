import { Paper } from "@mui/material";
import {
  About,
  Contact,
  Footer,
  Header,
  Home,
  Projects,
  Technologies,
} from "components";

import { ThemeProvider } from "context";

export const Portfolio = () => {
  return (
    <ThemeProvider>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Header />
        <Home />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </Paper>
    </ThemeProvider>
  );
};
