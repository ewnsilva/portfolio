import { Box, Typography, useMediaQuery } from "@mui/material";
import { photos } from "utils";

export const About = () => {
  const matchesMd = useMediaQuery("(max-width:870px)");

  return (
    <Box mb={5}>
      <Typography
        id="about"
        color={"primary"}
        variant="h4"
        fontWeight={600}
        textAlign={"center"}
        paddingTop={10}
        sx={{
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
            lg: "3rem",
          },
        }}
      >
        Sobre
      </Typography>
      <Box
        display={"flex"}
        flexDirection={matchesMd ? "column" : "row"}
        justifyContent={"center"}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <Box
          component="img"
          src={photos[0].image}
          alt={photos[0].name}
          sx={{
            border: "5px solid",
            borderRadius: 3,
            borderColor: "primary.main",
            width: matchesMd ? "75%" : "50%",
            maxWidth: "450px",
            margin: "20px",
          }}
        />
        <Typography
          m={2}
          textAlign={"justify"}
          width={matchesMd ? "95%" : "50%"}
          sx={{
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
              md: "1.2rem",
              lg: "1.5rem",
            },
          }}
        >
          Sou Desenvolvedor Front-end focado em aperfeiçoamento continuo e
          resolução de problemas de através de confecção de código limpo, sempre
          visando otimiziar o sistema como um todo e garantir uma ótima
          experiencia visual e funcional para o usuário.
        </Typography>
      </Box>
    </Box>
  );
};
