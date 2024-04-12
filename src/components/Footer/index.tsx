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
    <BottomNavigationAction label="Home" icon={<Home />} href="#home" />
    <BottomNavigationAction label="Person" icon={<Person />} href="#about" />
    <BottomNavigationAction label="Star" icon={<Star />} href="#tech" />
    <BottomNavigationAction label="Work" icon={<Work />} href="#projects" />
    <BottomNavigationAction
      label="Message"
      icon={<Message />}
      href="#contact"
    />
  </BottomNavigation>
);
