import { Box, Typography, useMediaQuery } from "@mui/material";
import { keyframes } from "@mui/system";

import { photos } from "utils";

export const Home = () => {
  const matchesMd = useMediaQuery("(max-width:870px)");

  const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px); /* Pequeno deslocamento para um efeito suave */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

  return (
    <>
      <Typography id="home" variant="h3" sx={{ color: "transparent" }}>
        Home
      </Typography>

      <Box
        mb={12}
        display={"flex"}
        flexDirection={matchesMd ? "column" : "row"}
        columnGap={10}
        alignItems={"center"}
        textAlign={"center"}
        justifyContent={"space-around"}
        sx={{
          animation: `${fadeIn} 1s ease-out`,
        }}
      >
        <Box>
          <Typography
            color={"primary"}
            variant="h3"
            mb={1}
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
                lg: "3rem",
              },
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)",
              fontWeight: "bold",
              animation: `${fadeIn} 1s ease-out`,
            }}
          >
            Ericles Willian
          </Typography>

          <Typography
            color={"primary"}
            variant="h4"
            mb={matchesMd ? 2 : 0}
            sx={{
              fontSize: {
                xs: "1.2rem",
                sm: "1.5rem",
                md: "2rem",
                lg: "2.5rem",
              },
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
              fontWeight: 500,
              animation: `${fadeIn} 1s ease-out`,
            }}
          >
            Desenvolvedor Front-End
          </Typography>
        </Box>

        <Box
          component="img"
          src={photos[1].image}
          alt={photos[1].name}
          sx={{
            border: "5px solid",
            borderRadius: 3,
            borderColor: "primary.main",
            width: "70%",
            maxWidth: "350px",
            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
            animation: `${fadeIn} 1s ease-out`,
          }}
        />
      </Box>
    </>
  );
};
