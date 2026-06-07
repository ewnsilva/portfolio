import { JSX, useEffect, useState } from "react";
import { useLanguage } from "hooks/useLanguage";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  Fade,
  Paper,
  Button,
  useTheme as useMuiTheme,
} from "@mui/material";
import { projects } from "utils";
import { ArrowLeft, ArrowRight, Launch } from "@mui/icons-material";
import { useTheme } from "hooks";
import { Title } from "components";

export const Projects = (): JSX.Element => {
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  const muiTheme = useMuiTheme();

  const isDesktop = useMediaQuery(muiTheme.breakpoints.up("lg"));
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const [preview, setPreview] = useState(1); // Mantido o padrão iniciando no projeto 1 (Retro-Burgers)
  const [fadeIn, setFadeIn] = useState(true);

  const handlePrev = () => {
    setFadeIn(false);
    setTimeout(() => {
      setPreview((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setFadeIn(true);
    }, 400);
  };

  const handleNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setPreview((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      setFadeIn(true);
    }, 400);
  };

  const currentProject =
    projects.find((project) => project.number === preview) || projects[0];

  useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });
  }, []);

  return (
    <Box
      mb={isMobile ? 8 : 15}
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
    >
      <Title styles={{ textAlign: "center" }} id="projects">
        {t("projects.title")}
      </Title>

      <Box
        width="100%"
        maxWidth="1300px"
        sx={{ px: { xs: 2, sm: 4 }, mt: 4, position: "relative" }}
      >
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            p: { xs: 2, sm: 4 },
            gap: { xs: 3, md: 6 },
            flexDirection: isDesktop ? "row" : "column",
            borderRadius: "24px",
            border: "1px solid",
            borderColor: darkMode
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(0, 0, 0, 0.05)",
            backgroundColor: (theme) => theme.palette.background.paper,
            boxShadow: darkMode
              ? "0px 20px 50px rgba(0, 0, 0, 0.3)"
              : "0px 20px 50px rgba(0, 90, 116, 0.1)",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            width={isDesktop ? "60%" : "100%"}
            alignItems="center"
            position="relative"
          >
            <Box
              width="100%"
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "16px",
                aspectRatio: isMobile ? "4/3" : "16/9",
                maxHeight: { xs: "280px", sm: "400px", md: "480px" },
                width: "100%",
                border: "1px solid",
                borderColor: darkMode
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 0, 0, 0.08)",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
                backgroundColor: "#000",
              }}
            >
              <Fade in={fadeIn} timeout={400}>
                <Box sx={{ width: "100%", height: "100%" }}>
                  <img
                    src={currentProject?.image}
                    alt={currentProject?.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                    }}
                  />
                </Box>
              </Fade>

              <IconButton
                onClick={handlePrev}
                color="primary"
                sx={{
                  position: "absolute",
                  left: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: darkMode
                    ? "rgba(0, 38, 65, 0.7)"
                    : "rgba(250, 250, 250, 0.8)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid",
                  borderColor: "primary.main",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                    transform: "translateY(-50%) scale(1.08)",
                  },
                }}
              >
                <ArrowLeft fontSize={isMobile ? "small" : "medium"} />
              </IconButton>

              <IconButton
                onClick={handleNext}
                color="primary"
                sx={{
                  position: "absolute",
                  right: 16,
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: darkMode
                    ? "rgba(0, 38, 65, 0.7)"
                    : "rgba(250, 250, 250, 0.8)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid",
                  borderColor: "primary.main",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                    transform: "translateY(-50%) scale(1.08)",
                  },
                }}
              >
                <ArrowRight fontSize={isMobile ? "small" : "medium"} />
              </IconButton>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={2.5}
              gap={1.2}
            >
              {projects.map((_, index) => {
                const isActive = index === preview;
                return (
                  <Box
                    key={index}
                    sx={{
                      width: isActive ? 28 : 10,
                      height: 10,
                      borderRadius: "5px",
                      backgroundColor: isActive
                        ? "primary.main"
                        : darkMode
                          ? "rgba(216, 216, 216, 0.3)"
                          : "rgba(0, 90, 116, 0.2)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      if (index !== preview) {
                        setFadeIn(false);
                        setTimeout(() => {
                          setPreview(index);
                          setFadeIn(true);
                        }, 400);
                      }
                    }}
                  />
                );
              })}
            </Box>
          </Box>

          <Box
            width={isDesktop ? "40%" : "100%"}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{ mt: isDesktop ? 0 : 2 }}
          >
            <Fade in={fadeIn} timeout={400}>
              <Box
                sx={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography
                  color="primary"
                  variant="h4"
                  fontWeight={800}
                  sx={{
                    fontSize: {
                      xs: "1.4rem",
                      sm: "1.6rem",
                      md: "1.8rem",
                      lg: "2rem",
                    },
                    letterSpacing: "-0.01em",
                  }}
                >
                  {currentProject?.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                    lineHeight: 1.7,
                    color: "text.primary",
                    textAlign: "justify",
                    opacity: 0.9,
                    minHeight: isDesktop ? "120px" : "auto",
                  }}
                >
                  {t(`projects.list.${currentProject?.number}.description`)}
                </Typography>

                {currentProject?.url && (
                  <Box display="flex" mt={0.5}>
                    <Button
                      component="a"
                      href={currentProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      color="primary"
                      endIcon={
                        <Launch sx={{ fontSize: "0.9rem !important" }} />
                      }
                      sx={{
                        textTransform: "none",
                        fontWeight: 600,
                        borderRadius: "10px",
                        px: 3,
                        py: 0.8,
                        fontSize: "0.9rem",
                        boxShadow: (theme) =>
                          `0px 6px 16px ${theme.palette.primary.main}30`,
                        transition: "all 0.2s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          backgroundColor: (theme) =>
                            darkMode
                              ? `${theme.palette.primary.main}cc`
                              : theme.palette.primary.dark,
                          boxShadow: (theme) =>
                            `0px 8px 20px ${theme.palette.primary.main}50`,
                        },
                      }}
                    >
                      {t("projects.viewProject") || "Acessar Projeto"}
                    </Button>
                  </Box>
                )}

                <Box
                  mt={1}
                  p={2}
                  sx={{
                    borderRadius: "12px",
                    backgroundColor: darkMode
                      ? "rgba(0, 38, 65, 0.4)"
                      : "rgba(0, 90, 116, 0.05)",
                    borderLeft: "4px solid",
                    borderColor: "primary.main",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
                      lineHeight: 1.5,
                      textAlign: "justify",
                      color: darkMode
                        ? "rgba(216, 216, 216, 0.8)"
                        : "primary.main",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "0.8rem",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      {t("projects.technologies")}
                    </span>
                    {t(`projects.list.${currentProject?.number}.technologies`)}
                  </Typography>
                </Box>
              </Box>
            </Fade>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
