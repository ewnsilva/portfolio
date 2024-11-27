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
import useTheme from "hooks/useTheme";

export const Header = () => {
  const { darkMode, changeTheme } = useTheme();

  return (
    <Box>
      <AppBar position="fixed" sx={{ flexGrow: 1 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display={"flex"} alignItems={"baseline"}>
            <Typography>Ericles Willian | </Typography>
            <Typography fontSize={12} sx={{ ml: 1 }}>
              Desenvolvedor Front-End
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"end"}>
            <Button
              color="inherit"
              aria-label="download"
              endIcon={<DocumentScanner />}
            >
              Download Curriculo
            </Button>
            <Tooltip title="Toggle Dark Mode">
              <IconButton
                edge="end"
                color="inherit"
                aria-label="dark-mode"
                onClick={changeTheme}
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
