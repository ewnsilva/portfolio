import { Box, Typography, useMediaQuery } from "@mui/material";

import { photos } from "utils";

export const Home = () => {
  const matchesMd = useMediaQuery("(max-width:870px)");

  return (
    <>
      <Typography id="home" variant="h3" sx={{ color: "transparent" }}>
        Home
      </Typography>
      <Box
        mb={10}
        display={"flex"}
        flexDirection={matchesMd ? "column" : "row"}
        columnGap={10}
        alignItems={"center"}
        textAlign={"center"}
        justifyContent={"space-around"}
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
          }}
        />
      </Box>
    </>
  );
};
