import { Box, Typography, useMediaQuery } from "@mui/material";

export const Projects = () => {
  const matchesMd = useMediaQuery("(max-width:850px)");

  return (
    <Box mb={5} display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography variant="h4" id="projects" paddingTop={10}>
        Projetos
      </Typography>

      <Box
        border={"5px solid black"}
        sx={{
          width: "70%",
          height: "600px",
          margin: "20px",
        }}
      />
    </Box>
  );
};
