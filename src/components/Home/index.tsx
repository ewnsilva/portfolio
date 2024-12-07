import { Box, Typography, useMediaQuery } from "@mui/material";

export const Home = () => {
  const matchesMd = useMediaQuery("(max-width:870px)");

  return (
    <>
      <Typography color={"primary"} id="home" />
      <Box
        mt={11}
        mb={5}
        display={"flex"}
        flexDirection={matchesMd ? "column" : "row"}
        columnGap={10}
        alignItems={"center"}
        textAlign={"center"}
        justifyContent={"space-around"}
      >
        <Box>
          <Typography color={"primary"} variant="h3">
            Ericles Willian
          </Typography>
          <Typography color={"primary"} variant="h4">
            Desenvolvedor Front-End
          </Typography>
        </Box>

        <Box
          border={"5px solid"}
          borderRadius={3}
          borderColor={"primary.main"}
          sx={{
            width: "350px",
            height: "500px",
            margin: "20px",
          }}
        />
      </Box>
    </>
  );
};
