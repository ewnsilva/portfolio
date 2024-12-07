import { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  Fade,
} from "@mui/material";
import { projects } from "utils";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export const Projects = () => {
  const matchesMd = useMediaQuery("(min-width:1200px)");
  const [preview, setPreview] = useState(3);
  const [fadeIn, setFadeIn] = useState(true);

  const handlePrev = () => {
    setFadeIn(false);
    setTimeout(() => {
      setPreview((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setFadeIn(true);
    }, 300);
  };

  const handleNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setPreview((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      setFadeIn(true);
    }, 300);
  };

  const currentProject = projects.find((project) => project.number === preview);

  return (
    <Box mb={5} display="flex" flexDirection="column" alignItems="center">
      <Typography color={"primary"} variant="h4" id="projects" paddingTop={10}>
        Projetos
      </Typography>

      <Box
        display="flex"
        flexDirection={matchesMd ? "row" : "column"}
        border="5px solid"
        borderRadius={3}
        borderColor={"primary.main"}
        width="90%"
        p={2}
        margin="20px"
        alignItems="center"
        position="relative"
      >
        <Fade in={fadeIn} timeout={300}>
          <Box
            display="flex"
            width={matchesMd ? "65%" : "100%"}
            alignItems="center"
            position="relative"
          >
            <IconButton
              disabled={preview === 3}
              onClick={handleNext}
              color={"secondary"}
              sx={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              <ArrowLeft />
            </IconButton>

            <Box display="flex" alignContent="center" width="100%">
              <img
                src={currentProject?.image}
                alt={currentProject?.name}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: 750,
                  minHeight: 200,
                  objectFit: "cover",
                  transition: "opacity 0.3s ease-in-out",
                }}
              />
            </Box>
            <IconButton
              disabled={preview === 0}
              onClick={handlePrev}
              color={"secondary"}
              sx={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              <ArrowRight />
            </IconButton>
          </Box>
        </Fade>

        <Fade in={fadeIn} timeout={300}>
          <Box
            sx={{
              p: 2,
              width: matchesMd ? "35%" : "100%",
              alignContent: "center",
              textAlign: "justify",
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            <Typography color={"primary"} variant="h5" mb={2}>
              Descrição:
            </Typography>
            <Typography>{currentProject?.description}</Typography>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};
