import { JSX, useState } from "react";
import { Box, Typography, Tooltip, Popover, Paper } from "@mui/material";
import { useLanguage } from "hooks/useLanguage";
import { skills } from "utils";
import { useTheme } from "hooks";
import { Title } from "components";

export const Technologies = () => {
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [popoverContent, setPopoverContent] = useState<string>("");

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement>,
    name: string,
  ) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent(name);

    setTimeout(() => {
      setAnchorEl(null);
    }, 1500);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setPopoverContent("");
  };

  const isPopoverOpen = Boolean(anchorEl);

  const TechnologiesImages = (title: string, filter: string): JSX.Element => (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Typography
        variant="h5"
        color="primary"
        sx={{
          p: 1,
          mb: 1,
          fontWeight: 600,
          textAlign: "left",
          pl: { xs: 2, sm: 4 },
          fontSize: {
            xs: "1.1rem",
            sm: "1.3rem",
            md: "1.5rem",
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
            <Box
              key={name}
              sx={{
                flexShrink: 0,
                border: "1px solid",
                borderColor: darkMode
                  ? "rgba(255, 255, 255, 0.12)"
                  : "rgba(0, 0, 0, 0.08)",
                backgroundColor: darkMode
                  ? "rgba(255, 255, 255, 0.05)"
                  : "rgba(0, 0, 0, 0.03)",
                borderRadius: "12px",
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
              <Tooltip title={name} arrow>
                <img
                  src={image}
                  alt={name}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                  }}
                  onClick={(event) => handlePopoverOpen(event, name)}
                />
              </Tooltip>
            </Box>
          ))}
      </Box>
    </Box>
  );

  return (
    <Box
      mb={12}
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
          p: { xs: 1, sm: 3 },
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "1200px",
          borderRadius: "20px",
          border: "1px solid",
          borderColor: darkMode
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(0, 0, 0, 0.04)",
          backgroundColor: darkMode
            ? "rgba(255, 255, 255, 0.01)"
            : "rgba(0, 0, 0, 0.01)",
        }}
      >
        {TechnologiesImages(t("technologies.tech"), "Technology")}
        {TechnologiesImages(t("technologies.software"), "Software")}
        {TechnologiesImages(t("technologies.management"), "Management")}

        <Popover
          open={isPopoverOpen}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          slotProps={{
            paper: {
              sx: {
                borderRadius: "8px",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
                border: "1px solid",
                borderColor: "primary.light",
              },
            },
          }}
        >
          <Typography sx={{ p: 1.5, fontWeight: 500, fontSize: "0.9rem" }}>
            {popoverContent}
          </Typography>
        </Popover>
      </Paper>
    </Box>
  );
};
