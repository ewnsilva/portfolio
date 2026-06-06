import { Box, Typography, useMediaQuery } from "@mui/material";
import { useLanguage } from "hooks/useLanguage";
import { Title } from "components";
import { photos } from "utils";

export const About = () => {
  const { t } = useLanguage();
  const matchesMd = useMediaQuery("(max-width:870px)");

  return (
    <Box mb={25}>
      <Title styles={{ textAlign: "center" }} id="about">
        {t("about.title")}
      </Title>
      <Box
        display={"flex"}
        flexDirection={matchesMd ? "column" : "row"}
        justifyContent={"center"}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <Box
          component="img"
          src={photos[0].image}
          alt={photos[0].name}
          sx={{
            border: "5px solid",
            borderRadius: 3,
            borderColor: "primary.main",
            width: matchesMd ? "75%" : "50%",
            maxWidth: "450px",
            margin: "20px",
          }}
        />
        <Typography
          m={2}
          textAlign={"justify"}
          width={matchesMd ? "95%" : "50%"}
          sx={{
            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
              md: "1.2rem",
              lg: "1.5rem",
            },
          }}
        >
          {t("about.description")}
        </Typography>
      </Box>
    </Box>
  );
};
