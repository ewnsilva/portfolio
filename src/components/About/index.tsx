import { Box, Typography, useMediaQuery } from "@mui/material";

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
          border={"5px solid"}
          borderRadius={3}
          borderColor={"primary.main"}
          sx={{
            width: matchesMd ? "250px" : "50%",
            height: "200px",
            margin: "20px",
            justifyContent: "center",
          }}
        />
        <Typography
          m={2}
          textAlign={"justify"}
          width={matchesMd ? "95%" : "50%"}
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
