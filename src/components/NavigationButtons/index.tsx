import { Box, Button } from "@mui/material";
import { Home, Person, Star, Work, Message } from "@mui/icons-material";

export const NavigationButtons = () => (
  <Box
    sx={{
      width: "100%",
      position: "fixed",
      left: "50%",
      transform: "translateX(-50%)",
      bottom: 10,
      textAlign: "center",
      maxWidth: "500px",
      backgroundColor: "transparent",
      borderRadius: 10,
      p: 0,
    }}
  >
    <Button
      href="#home"
      sx={{
        border: "1px solid",
        borderRadius: 3,
        borderColor: "primary.main",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        m: 0.5,
      }}
    >
      <Home color={"primary"} />
    </Button>
    <Button
      href="#about"
      sx={{
        border: "1px solid",
        borderRadius: 3,
        borderColor: "primary.main",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        m: 0.5,
      }}
    >
      <Person color={"primary"} />
    </Button>
    <Button
      href="#tech"
      sx={{
        border: "1px solid",
        borderRadius: 3,
        borderColor: "primary.main",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        m: 0.5,
      }}
    >
      <Star color={"primary"} />
    </Button>
    <Button
      href="#projects"
      sx={{
        border: "1px solid",
        borderRadius: 3,
        borderColor: "primary.main",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        m: 0.5,
      }}
    >
      <Work color={"primary"} />
    </Button>
    <Button
      href="#contact"
      sx={{
        border: "1px solid",
        borderRadius: 3,
        borderColor: "primary.main",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        m: 0.5,
      }}
    >
      <Message color={"primary"} />
    </Button>
  </Box>
);
