import { Box, Button, Paper, Typography, useMediaQuery } from "@mui/material";
import { useLanguage } from "hooks/useLanguage";
import { KeyboardArrowUp, Email, LinkedIn } from "@mui/icons-material";

export const Contact = () => {
  const { t } = useLanguage();
  const matchesMd = useMediaQuery("(max-width:860px)");

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        height: matchesMd ? "500px" : "375px",
        width: "100%",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Button
        href="#home"
        sx={{
          borderRadius: 10,
          minWidth: 15,
          p: 1,
          position: "absolute",
          top: 0,
        }}
      >
        <KeyboardArrowUp fontSize="large" />
      </Button>
      <Box
        display="flex"
        flexDirection={matchesMd ? "column" : "row"}
        py={5}
        my={5}
      >
        <Paper
          elevation={5}
          sx={{
            width: 250,
            textAlign: "center",
            p: 2,
            mx: matchesMd ? 0 : 10,
            mb: matchesMd ? 5 : 0,
          }}
        >
          <Button
            href="https://www.linkedin.com/in/ericles-willian-263190200/"
            startIcon={<LinkedIn />}
          >
            <b>{t("contact.linkedinLabel")}</b>
          </Button>
          <Typography>{t("contact.linkedinDescription")}</Typography>
        </Paper>
        <Paper
          elevation={5}
          sx={{ width: 250, textAlign: "center", p: 2, mx: matchesMd ? 0 : 10 }}
        >
          <Button href="mailto:ewnsilva@gmail.com" startIcon={<Email />}>
            <b>{t("contact.emailLabel")}</b>
          </Button>
          <Typography>{t("contact.emailDescription")}</Typography>
        </Paper>
      </Box>
      <Typography
        id="contact"
        mb={15}
        fontWeight={600}
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.2rem",
            md: "1.4rem",
            lg: "1.6rem",
          },
        }}
      >
        {t("contact.thanks")}
      </Typography>
    </Paper>
  );
};
