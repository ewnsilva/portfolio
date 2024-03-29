import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { Brightness4, DarkMode, DocumentScanner } from "@mui/icons-material";

export const Header = () => {
  const handleDownload = () => {
    // Lógica para baixar o currículo
  };

  const handleDarkModeToggle = () => {
    // Lógica para alternar entre modo claro e escuro
  };

  return (
    <Box>
      <AppBar position="fixed" sx={{ flexGrow: 1 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Ericles Willian</Typography>
          <Box display={"flex"} justifyContent={"end"}>
            <Tooltip title="Download Currículo">
              <Button
                color="inherit"
                aria-label="download"
                onClick={handleDownload}
                endIcon={<DocumentScanner />}
              >
                Download Curriculo
              </Button>
            </Tooltip>
            <Tooltip title="Toggle Dark Mode">
              <IconButton
                edge="end"
                color="inherit"
                aria-label="dark-mode"
                onClick={handleDarkModeToggle}
                sx={{ ml: 2 }}
              >
                <Brightness4 />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
