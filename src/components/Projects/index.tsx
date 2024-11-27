import { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";

import { projects } from "utils";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export const Projects = () => {
  const [preview, setPreview] = useState(3);

  const handlePrev = () => {
    setPreview((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setPreview((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
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
      >
        {projects.map(({ image, name, number, description }) => {
          return (
            number === preview && (
              <Box display="flex" width={"100%"}>
                <Box display="flex" width={"100%"}>
                  <Button disabled={preview === 3} onClick={handleNext}>
                    <ArrowLeft />
                  </Button>
                  <Box display={"flex"} alignContent={"center"}>
                    <img
                      key={number}
                      src={image}
                      alt={name}
                      style={{
                        width: 800,
                        height: 450,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = "brightness(50%)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = "brightness(100%)";
                      }}
                    />
                  </Box>
                  <Button disabled={preview === 0} onClick={handlePrev}>
                    <ArrowRight />
                  </Button>
                </Box>
                <Box
                  sx={{
                    p: 2,
                    width: "50%",
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
            )
          );
        })}
      </Box>
    </Box>
  );
};
