import { Box, Typography, useMediaQuery, CardMedia } from "@mui/material";
import { skills } from "utils";

export const Technologies = () => {
  const matchesMd = useMediaQuery("(max-width:850px)");

  return (
    <Box mb={5} display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography variant="h4">Experiencias</Typography>

      <Box
        border={"5px solid black"}
        sx={{
          margin: "20px",
          textAlign: "center",
          justifyItems: "center",
        }}
      >
        {skills
          .filter((i) => i.category === "Technology")
          .map(({ image, name }) => (
            <img
              src={image}
              alt={name}
              style={{ width: "75px", padding: "5px" }}
            />
          ))}
        {skills
          .filter((i) => i.category === "Software")
          .map(({ image, name }) => (
            <img
              src={image}
              alt={name}
              style={{ width: "75px", padding: "5px" }}
            />
          ))}
        {skills
          .filter((i) => i.category === "Management")
          .map(({ image, name }) => (
            <img
              src={image}
              alt={name}
              style={{ width: "75px", padding: "5px" }}
            />
          ))}
      </Box>
    </Box>
  );
};
