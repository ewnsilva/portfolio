import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";

import { projects } from "utils";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export const Projects = () => {
  const [preview, setPreview] = useState(3);
  const [fade, setFade] = useState(true);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setPreview((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setFade(true);
    }, 300);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setPreview((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 300);
  };

  return (
    <Box mb={5} display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography variant="h4" id="projects" paddingTop={10}>
        Projetos
      </Typography>

      <Box
        display={"flex"}
        flexDirection={"row"}
        border={"5px solid black"}
        width="90%"
        p={2}
        margin="20px"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {projects.map(({ image, name, number, description }) => {
          return (
            number === preview && (
              <>
                <IconButton disabled={preview === 3} onClick={handleNext}>
                  <ArrowLeft />
                </IconButton>

                <Box display={"flex"} width={"80%"} alignContent={"center"}>
                  <img
                    key={number}
                    src={image}
                    alt={name}
                    style={{
                      height: 450,
                      opacity: fade ? 1 : 0,
                      transition:
                        "opacity 0.3s ease-in-out,  filter 0.2s ease-in-out",
                      filter: "brightness(100%)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = "brightness(50%)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = "brightness(100%)";
                    }}
                  />

                  <Box
                    sx={{
                      p: 2,
                      width: "68%",
                      position: "absolute",
                      alignContent: "center",
                      textAlign: "justify",
                    }}
                  >
                    <Typography variant="h5" mb={2}>
                      Descrição:
                    </Typography>
                    <Typography>{description}</Typography>
                  </Box>
                </Box>

                <IconButton disabled={preview === 0} onClick={handlePrev}>
                  <ArrowRight />
                </IconButton>
              </>
            )
          );
        })}
      </Box>
    </Box>
  );
};
