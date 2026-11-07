import { JSX } from "react";
import {
  Box,
  Typography,
  Tooltip,
  Paper,
  useMediaQuery,
  useTheme as useMuiTheme,
} from "@mui/material";
import { useLanguage } from "hooks/useLanguage";
import { skills } from "utils";
import { useTheme } from "hooks";
import { Title } from "components";

export const Technologies = (): JSX.Element => {
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  // Mapeamento das 4 categorias ajustadas para nível Pleno/Sênior
  const categories = [
    {
      key: "Frontend",
      title: t("technologies.frontend") || "Frontend Core & Architecture",
    },
    {
      key: "Backend",
      title: t("technologies.backend") || "Back-End & Testing",
    },
    { key: "Tools", title: t("technologies.tools") || "Tools, DevOps & AI" },
    {
      key: "Management",
      title: t("technologies.management") || "Management & Methodologies",
    },
  ];

  const TechnologiesImages = (title: string, filter: string): JSX.Element => (
    <Box sx={{ width: "100%", mb: 4, lastChild: { mb: 0 } }}>
      <Typography
        variant="h5"
        color="primary"
        sx={{
          p: 1,
          mb: 1.5,
          fontWeight: 600,
          textAlign: "left",
          pl: { xs: 2, sm: 4 },
          fontSize: {
            xs: "1.1rem",
            sm: "1.3rem",
            md: "1.4rem",
          },
        }}
      >
        {title}
      </Typography>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent={{ xs: "flex-start", md: "center" }}
        flexWrap={{ xs: "nowrap", md: "wrap" }}
        sx={{
          overflowX: { xs: "auto", md: "unset" },
          px: { xs: 2, sm: 4 },
          pb: 2,
          gap: 2,
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {skills
          .filter((i) => i.category === filter)
          .map(({ image, name }) => (
            <Tooltip key={name} title={name} arrow>
              <Box
                sx={{
                  flexShrink: 0,
                  width: "75px",
                  height: "75px",
                  border: "1px solid",
                  borderColor: darkMode
                    ? "rgba(255, 255, 255, 0.12)"
                    : "rgba(0, 0, 0, 0.08)",
                  backgroundColor: darkMode
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.03)",
                  borderRadius: "14px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1.5,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "primary.main",
                    backgroundColor: darkMode
                      ? "rgba(0, 168, 204, 0.1)"
                      : "rgba(0, 168, 204, 0.05)",
                    boxShadow: (theme) =>
                      `0px 8px 20px ${theme.palette.primary.main}30`,
                  },
                }}
              >
                <img
                  src={image}
                  alt={name}
                  style={{
                    width: "42px",
                    height: "42px",
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                  }}
                />
              </Box>
            </Tooltip>
          ))}
      </Box>
    </Box>
  );

  return (
    <Box
      mb={isMobile ? 8 : 15}
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
    >
      <Title styles={{ textAlign: "center" }} id="tech">
        {t("technologies.title")}
      </Title>

      <Paper
        elevation={0}
        sx={{
          mt: 4,
          py: 4,
          px: { xs: 1, sm: 3 },
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "1200px",
          borderRadius: "24px",
          border: "1px solid",
          borderColor: darkMode
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(0, 0, 0, 0.04)",
          backgroundColor: (theme) => theme.palette.background.paper,
          boxShadow: darkMode
            ? "0px 20px 50px rgba(0, 0, 0, 0.3)"
            : "0px 20px 50px rgba(0, 90, 116, 0.1)",
        }}
      >
        {categories.map((cat) => (
          <Box key={cat.key} width="100%">
            {TechnologiesImages(cat.title, cat.key)}
          </Box>
        ))}
      </Paper>
    </Box>
  );
};
