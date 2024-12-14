import { useState } from "react";

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
} from "@mui/icons-material";

import { useTheme } from "hooks/useTheme";

export const Header = () => {
  const { darkMode, changeTheme } = useTheme();

  const matchesSm = useMediaQuery("(max-width:650px)");

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setTimeout(() => {
      setAnchorEl(null);
    }, 6000);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <AppBar position="fixed" sx={{ flexGrow: 1 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box display={"flex"} alignItems={"baseline"}>
            <Typography color={"secondary"} ml={1} fontWeight={600}>
              Ericles Willian
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"end"}>
            {!matchesSm && (
              <>
                <Button
                  variant="contained"
                  endIcon={<WhatsApp />}
                  color="secondary"
                  href="https://wa.me/5512982562145?text=Olá%2C%20vi%20seu%20portfolio%20e%20gostaria%20de%20entrar%20em%20contato%21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Entre em contato
                </Button>
                <Tooltip title="Acessar LinkedIn">
                  <IconButton
                    color="secondary"
                    href="https://www.linkedin.com/in/ericles-willian-263190200/"
                    target="_blank"
                    rel="noopener noreferrer"
                    edge="end"
                    sx={{ ml: 3 }}
                  >
                    <LinkedIn />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Acessar GitHub">
                  <IconButton
                    color="secondary"
                    href="https://github.com/ewnsilva"
                    target="_blank"
                    rel="noopener noreferrer"
                    edge="end"
                    sx={{ ml: 3 }}
                  >
                    <GitHub />
                  </IconButton>
                </Tooltip>
              </>
            )}
            {matchesSm && (
              <>
                <Button
                  onClick={handlePopoverOpen}
                  variant="outlined"
                  color="secondary"
                  size="small"
                  sx={{ minWidth: 45 }}
                >
                  <Menu />
                </Button>
              </>
            )}
            <Tooltip title={darkMode ? "Tema Escuro" : "Tema Claro"}>
              <IconButton
                color="secondary"
                edge="end"
                aria-label="dark-mode"
                onClick={changeTheme}
                sx={{ ml: 3, mr: 1 }}
              >
                {darkMode ? <DarkMode /> : <BrightnessHigh />}
              </IconButton>
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
          sx={{
            m: 2,
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            sx={{
              p: 2,
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: 1,
            }}
          >
            <Box display={"flex"} justifyContent={"space-around"} pb={2}>
              <Tooltip title="Acessar LinkedIn">
                <IconButton
                  color="primary"
                  href="https://www.linkedin.com/in/ericles-willian-263190200/"
                  target="_blank"
                  rel="noopener noreferrer"
                  edge="end"
                  sx={{ mx: 2 }}
                >
                  <LinkedIn />
                </IconButton>
              </Tooltip>
              <Tooltip title="Acessar GitHub">
                <IconButton
                  href="https://github.com/ewnsilva"
                  color="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  edge="end"
                  sx={{ mx: 2 }}
                >
                  <GitHub />
                </IconButton>
              </Tooltip>
            </Box>
            <Button
              variant="contained"
              endIcon={<WhatsApp />}
              href="https://wa.me/5512982562145?text=Olá%2C%20vi%20seu%20portfolio%20e%20gostaria%20de%20entrar%20em%20contato%21"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entre em contato
            </Button>
          </Box>
        </Popover>
      </AppBar>
    </Box>
  );
};
