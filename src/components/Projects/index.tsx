import { JSX, useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  Fade,
  Paper,
} from "@mui/material";
import { projects } from "utils";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useTheme } from "hooks";
import { Title } from "components";

export const Projects = (): JSX.Element => {
  const { darkMode } = useTheme();
  const matchesMd = useMediaQuery("(min-width:1200px)");
  const matchesSm = useMediaQuery("(min-width:750px)");
  const [preview, setPreview] = useState(2);
  const [fadeIn, setFadeIn] = useState(true);

  const handlePrev = () => {
    setFadeIn(false);
    setTimeout(() => {
      setPreview((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setFadeIn(true);
    }, 550);
  };

  const handleNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setPreview((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      setFadeIn(true);
    }, 550);
  };

  const currentProject = projects.find((project) => project.number === preview);

  useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });
  }, []);

  return (
    <Box mb={10} display="flex" flexDirection="column" alignItems="center">
      <Title styles={{ textAlign: "center" }} id="projects">
        Projetos
      </Title>

      <Box width="90%" margin="20px" alignItems="center" position="relative">
        <Paper
          elevation={5}
          sx={{
            display: "flex",
            p: 2,
            flexDirection: matchesMd ? "row" : "column",
          }}
        >
          <Fade in={fadeIn} timeout={550}>
            <Box
              display="flex"
              flexDirection="column"
              width={matchesMd ? "65%" : "100%"}
              alignItems="center"
              position="relative"
            >
              <Box>
                <Box display="flex" position="relative">
                  <IconButton
                    disabled={preview === 0}
                    onClick={handlePrev}
                    color={"secondary"}
                    sx={{
                      position: "absolute",
                      left: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                      },
                    }}
                  >
                    <ArrowLeft fontSize={matchesSm ? "large" : "small"} />
                  </IconButton>

                  <Box display="flex" alignContent="center" width="100%">
                    <img
                      src={currentProject?.image}
                      alt={currentProject?.name}
                      style={{
                        width: "100%",
                        maxHeight: 750,
                        minHeight: 200,
                        objectFit: "cover",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    />
                  </Box>
                  <IconButton
                    disabled={preview === 6}
                    onClick={handleNext}
                    color={"secondary"}
                    sx={{
                      position: "absolute",
                      right: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                      },
                    }}
                  >
                    <ArrowRight fontSize={matchesSm ? "large" : "small"} />
                  </IconButton>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={2}
                gap={1}
              >
                {projects.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 15,
                      height: 15,
                      border: "1px solid",
                      borderColor: "primary.main",
                      borderRadius: "50%",
                      backgroundColor: darkMode
                        ? index === preview
                          ? "primary.main"
                          : "transparent"
                        : index === preview
                        ? "primary.main"
                        : "black",
                      transition: "background-color 0.3s ease",
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Fade>

          <Fade in={fadeIn} timeout={350}>
            <Box
              sx={{
                p: 2,
                width: matchesMd ? "35%" : "100%",
                alignContent: "center",
                textAlign: "justify",
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <Typography
                color={"primary"}
                variant="h5"
                mb={2}
                fontWeight={600}
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "1.3rem",
                  },
                }}
              >
                Descrição:
              </Typography>
              <Typography
                sx={{
                  mb: 2,
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "1.3rem",
                  },
                }}
              >
                {currentProject?.description}
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1.2rem",
                    lg: "1.3rem",
                  },
                }}
              >
                <b>Tecnologias: </b>
                {currentProject?.technologies}
              </Typography>
            </Box>
          </Fade>
        </Paper>
      </Box>
    </Box>
  );
};
