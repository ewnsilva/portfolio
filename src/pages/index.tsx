import { Box } from "@mui/material";
import {
  About,
  Contact,
  Footer,
  Header,
  Home,
  Projects,
  Technologies,
} from "components";

export const Portfolio = () => (
  <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
    <Header />
    <Home />
    <About />
    <Technologies />
    <Projects />
    <Contact />
    <Footer />
  </Box>
);
