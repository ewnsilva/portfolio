import { useState } from "react";
import { useLanguage } from "hooks/useLanguage";

import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
  Popover,
} from "@mui/material";
import {
  BrightnessHigh,
  DarkMode,
  GitHub,
  LinkedIn,
  WhatsApp,
  Menu,
  Language,
} from "@mui/icons-material";

import { useTheme } from "hooks/useTheme";

export const Header = () => {
  const { darkMode, changeTheme } = useTheme();
  const { t, language, changeLanguage } = useLanguage();

  const matchesSm = useMediaQuery("(max-width:650px)");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = () => {
    if (language === "en") {
      changeLanguage("pt");
    } else if (language === "pt") {
      changeLanguage("es");
    } else if (language === "es") {
      changeLanguage("en");
    }
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          flexGrow: 1,
          backgroundColor: darkMode
            ? "rgba(0, 38, 65, 0.85)"
            : "rgba(200, 242, 254, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid",
          borderColor: darkMode
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(0, 90, 116, 0.08)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 2, sm: 4 },
          }}
        >
          <Box display="flex" alignItems="center">
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                color: darkMode ? "secondary.main" : "primary.main",
                letterSpacing: "-0.02em",
                cursor: "pointer",
              }}
            >
              {t("header.name")}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={{ xs: 1, sm: 2 }}>
            {!matchesSm && (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<WhatsApp />}
                  href="https://wa.me/5512982562145?text=Olá%2C%20vi%20seu%20portfolio%20e%20gostaria%20de%20entrar%20em%20contato%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: "8px",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      boxShadow: "none",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  {t("header.contact")}
                </Button>

                <Tooltip title={t("header.linkedin")}>
                  <IconButton
                    color={darkMode ? "secondary" : "primary"}
                    href="https://www.linkedin.com/in/ericles-willian-263190200/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      transition: "all 0.2s",
                      "&:hover": { transform: "scale(1.1)" },
                    }}
                  >
                    <LinkedIn />
                  </IconButton>
                </Tooltip>

                <Tooltip title={t("header.github")}>
                  <IconButton
                    color={darkMode ? "secondary" : "primary"}
                    href="https://github.com/ewnsilva"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      transition: "all 0.2s",
                      "&:hover": { transform: "scale(1.1)" },
                    }}
                  >
                    <GitHub />
                  </IconButton>
                </Tooltip>
              </>
            )}

            {matchesSm && (
              <IconButton
                onClick={handlePopoverOpen}
                color={darkMode ? "secondary" : "primary"}
                sx={{
                  border: "1px solid",
                  borderColor: darkMode
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(0, 90, 116, 0.2)",
                  borderRadius: "8px",
                }}
              >
                <Menu />
              </IconButton>
            )}

            <Box
              sx={{
                width: "1px",
                height: "24px",
                backgroundColor: darkMode
                  ? "rgba(255, 255, 255, 0.15)"
                  : "rgba(0, 90, 116, 0.15)",
                ml: 1,
              }}
            />

            <Tooltip
              title={darkMode ? t("header.darkTheme") : t("header.lightTheme")}
            >
              <IconButton
                color={darkMode ? "secondary" : "primary"}
                onClick={changeTheme}
                sx={{
                  transition: "all 0.2s",
                  "&:hover": { transform: "rotate(15deg) scale(1.1)" },
                }}
              >
                {darkMode ? <DarkMode /> : <BrightnessHigh />}
              </IconButton>
            </Tooltip>

            <Tooltip title={t("header.currentLanguage")}>
              <Box
                onClick={handleChangeLanguage}
                className="language-selector"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  cursor: "pointer",
                  p: 0.5,
                  borderRadius: "8px",
                  transition: "all 0.2s",
                  color: darkMode ? "secondary.main" : "primary.main",
                  "&:hover": {
                    backgroundColor: darkMode
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(0, 90, 116, 0.05)",
                  },
                }}
              >
                <IconButton color="inherit" sx={{ p: 0 }}>
                  <Language />
                </IconButton>
                <Typography
                  variant="caption"
                  fontWeight={700}
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "0.75rem",
                    pr: 0.5,
                  }}
                >
                  {language}
                </Typography>
              </Box>
            </Tooltip>
          </Box>
        </Toolbar>

        <Popover
          open={open}
          onClose={handlePopoverClose}
          anchorEl={anchorEl}
          disableScrollLock={true}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            sx: {
              mt: 1.5,
              borderRadius: "16px",
              boxShadow: darkMode
                ? "0px 10px 30px rgba(0,0,0,0.5)"
                : "0px 10px 30px rgba(0,90,116,0.15)",
              border: "2px solid",
              borderColor: darkMode
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(0, 90, 116, 0.1)",
              backgroundColor: "background.paper",
              backdropFilter: "blur(10px)",
            },
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            sx={{ p: 2.5, minWidth: 180 }}
          >
            <Box display="flex" justifyContent="center" gap={1}>
              <IconButton
                color="primary"
                href="https://www.linkedin.com/in/ericles-willian-263190200/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://github.com/ewnsilva"
                color="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              endIcon={<WhatsApp />}
              href="https://wa.me/5512982562145?text=Olá%2C%20vi%20seu%20portfolio%20e%20gostaria%20de%20entrar%20em%20contato%21"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "8px",
              }}
            >
              {t("header.contact")}
            </Button>
          </Box>
        </Popover>
      </AppBar>
      <Toolbar />
    </Box>
  );
};
