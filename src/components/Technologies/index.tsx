import { useState } from "react";
import { Box, Typography, Tooltip, Popover, Paper } from "@mui/material";
import { skills } from "utils";
import { useTheme } from "hooks";

export const Technologies = () => {
  const { darkMode } = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [popoverContent, setPopoverContent] = useState<string>("");

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement>,
    name: string
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
    <>
      <Typography
        variant="h5"
        color={"primary"}
        sx={{
          p: 1,
          fontSize: {
            xs: "1.2rem",
            sm: "1.5rem",
            md: "1.8rem",
            lg: "1.8rem",
          },
        }}
      >
        {title}
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        mb={2}
      >
        {skills
          .filter((i) => i.category === filter)
          .map(({ image, name }) => (
            <Box
              key={name}
              sx={{
                border: "2px solid",
                borderColor: "primary.main",
                backgroundColor: darkMode
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(0, 0, 0, 0.08)",
                m: 1,
                borderRadius: 3,
                justifyItems: "center",
              }}
            >
              <Tooltip title={name}>
                <img
                  src={image}
                  alt={name}
                  style={{ width: "70px", height: "65px", padding: "5px" }}
                  onClick={(event) => handlePopoverOpen(event, name)}
                />
              </Tooltip>
            </Box>
          ))}
      </Box>
    </>
  );

  return (
    <Box mb={5} display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography
        color={"primary"}
        fontWeight={600}
        variant="h4"
        id="tech"
        paddingTop={10}
        sx={{
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
            lg: "3rem",
          },
        }}
      >
        Ferramentas
      </Typography>

      <Paper
        elevation={5}
        sx={{
          margin: "20px",
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          width: "90%",
        }}
      >
        {TechnologiesImages("Tecnologias", "Technology")}
        {TechnologiesImages("Software", "Software")}
        {TechnologiesImages("Gestão", "Management")}

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
        >
          <Typography sx={{ p: 2 }}>{popoverContent}</Typography>
        </Popover>
      </Paper>
    </Box>
  );
};
