import { Box, Typography, useMediaQuery } from "@mui/material";

export const Home = () => {
  const matchesMd = useMediaQuery("(max-width:900px)");

  return (
    <Box
      mt={11}
      mb={5}
      display={"flex"}
      flexDirection={matchesMd ? "column" : "row"}
      alignItems={"center"}
      textAlign={"center"}
      alignSelf={"center"}
      columnGap={10}
    >
      <Box>
        <Typography variant="h3" id="home">
          Ericles Willian
        </Typography>
        <Typography variant="h4">Desenvolvedor Front-End</Typography>
      </Box>

      <Box
        border={"5px solid black"}
        sx={{
          width: "350px",
          height: "500px",
          margin: "20px",
        }}
      />
    </Box>
  );
};
