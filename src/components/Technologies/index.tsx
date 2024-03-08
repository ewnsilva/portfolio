import { Box, Typography, useMediaQuery } from "@mui/material";

export const Technologies = () => {
  const matchesMd = useMediaQuery("(max-width:850px)");

  return (
    <Box mb={5} display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography variant="h4">Experiencias</Typography>

      <Box
        border={"5px solid black"}
        sx={{
          width: "70%",
          height: "300px",
          margin: "20px",
        }}
      />
    </Box>
  );
};
