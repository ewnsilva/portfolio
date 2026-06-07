import { Box, IconButton, Tooltip, useMediaQuery } from "@mui/material";
import { Home, Person, Star, Work, Message } from "@mui/icons-material";
import { useTheme } from "hooks";

export const NavigationButtons = () => {
  const { darkMode } = useTheme();

  // Breakpoint para alternar entre mobile (inferior) e desktop (lateral direita)
  const isMobile = useMediaQuery("(max-width:900px)");

  const navItems = [
    { href: "#home", icon: <Home />, label: "Home" },
    { href: "#about", icon: <Person />, label: "Sobre" },
    { href: "#tech", icon: <Star />, label: "Tecnologias" },
    { href: "#projects", icon: <Work />, label: "Projetos" },
    { href: "#contact", icon: <Message />, label: "Contato" },
  ];

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        zIndex: 1000,
        display: "flex",
        gap: 1.5,
        p: 1,

        // Vidro translúcido (Glassmorphism) adaptado para as cores do seu tema
        backgroundColor: darkMode
          ? "rgba(0, 38, 65, 0.7)"
          : "rgba(200, 242, 254, 0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",

        border: "1px solid",
        borderColor: darkMode
          ? "rgba(255, 255, 255, 0.08)"
          : "rgba(0, 90, 116, 0.15)",
        borderRadius: "32px",
        boxShadow: darkMode
          ? "0px 10px 30px rgba(0,0,0,0.4)"
          : "0px 10px 30px rgba(0, 90, 116, 0.1)",

        // Transição suave na mudança de orientação da tela
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",

        // Condicional de layout Responsivo
        ...(isMobile
          ? {
              // Estilo Dock Inferior no Mobile
              bottom: 16,
              left: "50%",
              transform: "translateX(-50%)",
              flexDirection: "row",
              width: "auto",
              maxWidth: "90%",
            }
          : {
              // Estilo Barra Vertical na Direita no Desktop
              top: "50%",
              right: 24,
              transform: "translateY(-50%)",
              flexDirection: "column",
            }),
      }}
    >
      {navItems.map((item) => (
        <Tooltip
          key={item.label}
          title={item.label}
          placement={isMobile ? "top" : "left"}
          arrow
        >
          <IconButton
            href={item.href}
            color="primary"
            sx={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

              // Estilo dos ícones baseado nas cores injetadas pelo seu tema
              color: "primary.main",
              backgroundColor: "transparent",

              "&:hover": {
                transform: "scale(1.12)",
                backgroundColor: darkMode ? "primary.main" : "primary.main",
                // Inverte a cor do ícone no hover para contraste total
                color: darkMode ? "#002641" : "#ffffff",
                boxShadow: (theme) =>
                  `0px 4px 12px ${theme.palette.primary.main}40`,
              },
              "& svg": {
                fontSize: "1.4rem",
              },
            }}
          >
            {item.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};
