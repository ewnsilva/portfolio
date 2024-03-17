import {
  Box,
  Typography,
  useMediaQuery,
  CardMedia,
  Tooltip,
} from "@mui/material";
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
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          width: "90%",
        }}
      >
        <Typography variant="h6">Tecnologias</Typography>
        <Box
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {skills
            .filter((i) => i.category === "Technology")
            .map(({ image, name }) => (
              <Box
                sx={{
                  border: "2px solid black",
                  m: 1,
                  borderRadius: 2,
                  justifyItems: "center",
                }}
              >
                <Tooltip title={name}>
                  <img
                    src={image}
                    alt={name}
                    style={{ width: "70px", height: "65px", padding: "5px" }}
                  />
                </Tooltip>
              </Box>
            ))}
        </Box>
        <Typography variant="h6">Software</Typography>
        <Box
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {skills
            .filter((i) => i.category === "Software")
            .map(({ image, name }) => (
              <img
                src={image}
                alt={name}
                style={{ width: "70px", height: "65px", padding: "5px" }}
              />
            ))}
        </Box>
        <Typography variant="h6">Gestão</Typography>
        <Box
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {skills
            .filter((i) => i.category === "Management")
            .map(({ image, name }) => (
              <img
                src={image}
                alt={name}
                style={{ width: "70px", height: "65px", padding: "5px" }}
              />
            ))}
        </Box>
      </Box>
    </Box>
  );
};
