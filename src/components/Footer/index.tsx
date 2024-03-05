import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, Explore, Favorite, Settings } from "@mui/icons-material";

export const Footer = () => (
  <BottomNavigation
    sx={{ width: "100%", position: "fixed", bottom: 0, textAlign: "center" }}
  >
    <BottomNavigationAction label="Home" icon={<Home />} />
    <BottomNavigationAction label="Explore" icon={<Explore />} />
    <BottomNavigationAction label="Favorites" icon={<Favorite />} />
    <BottomNavigationAction label="Settings" icon={<Settings />} />
  </BottomNavigation>
);
