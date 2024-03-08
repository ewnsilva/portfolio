import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, Person, Star, Work, Message } from "@mui/icons-material";

export const Footer = () => (
  <BottomNavigation
    sx={{
      width: "100%",
      position: "fixed",
      left: "50%",
      transform: "translateX(-50%)",
      bottom: 10,
      textAlign: "center",
      maxWidth: "500px",
      backgroundColor: "transparent",
      borderRadius: 10,
    }}
  >
    <BottomNavigationAction label="Home" icon={<Home />} />
    <BottomNavigationAction label="Person" icon={<Person />} />
    <BottomNavigationAction label="Star" icon={<Star />} />
    <BottomNavigationAction label="Work" icon={<Work />} />
    <BottomNavigationAction label="Message" icon={<Message />} />
  </BottomNavigation>
);
