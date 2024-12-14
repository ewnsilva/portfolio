import { Box, Button, SxProps } from "@mui/material";
import { Home, Person, Star, Work, Message } from "@mui/icons-material";
import { useTheme } from "hooks";

export const NavigationButtons = () => {
  const { darkMode } = useTheme();

  const style: SxProps = {
    border: "1px solid",
    borderRadius: 3,
    borderColor: "primary.main",
    backgroundColor: darkMode
      ? "rgba(255, 255, 255, 0.2)"
      : "rgba(0, 0, 0, 0.1)",
    m: 0.5,
    stroke: "black", // define o contorno preto
    strokeWidth: 0.2, // ajusta a largura do contorno
  };
  return (
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
      <Button href="#home" sx={style}>
        <Home
          color={"primary"}
          sx={{
            textShadow:
              "0px 0px 1px black, 1px 1px 1px black, -1px -1px 1px black",
          }}
        />
      </Button>
      <Button href="#about" sx={style}>
        <Person color={"primary"} />
      </Button>
      <Button href="#tech" sx={style}>
        <Star color={"primary"} />
      </Button>
      <Button href="#projects" sx={style}>
        <Work color={"primary"} />
      </Button>
      <Button href="#contact" sx={style}>
        <Message color={"primary"} />
      </Button>
    </Box>
  );
};
