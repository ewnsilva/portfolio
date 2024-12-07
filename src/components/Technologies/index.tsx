import { useState } from "react";
import { Box, Typography, Tooltip, Popover } from "@mui/material";
import { skills } from "utils";

export const Technologies = () => {
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
      <Typography variant="h6" color={"primary"}>
        {title}
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {skills
          .filter((i) => i.category === filter)
          .map(({ image, name }) => (
            <Box
              key={name}
              sx={{
                border: "2px solid",
                borderColor: "primary.main",
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
      <Typography color={"primary"} variant="h4" id="tech" paddingTop={10}>
        Experiencias
      </Typography>

      <Box
        border={"5px solid"}
        borderColor={"primary.main"}
        borderRadius={3}
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
      </Box>
    </Box>
  );
};
