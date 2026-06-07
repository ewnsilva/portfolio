import { Box, Button, Paper, Typography, useMediaQuery } from "@mui/material";
import { keyframes } from "@mui/system";
import { useLanguage } from "hooks/useLanguage";
import { KeyboardArrowUp, Email, LinkedIn, Launch } from "@mui/icons-material";
import { useTheme } from "hooks";

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

export const Contact = () => {
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  const matchesMd = useMediaQuery("(max-width:860px)");

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        pt: 8,
        pb: 6,
        px: 2,
        position: "relative",
        borderRadius: "32px 32px 0 0",
        borderTop: "1px solid",
        borderColor: darkMode
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(0, 0, 0, 0.05)",
        backgroundColor: (theme) => theme.palette.background.paper,
        boxShadow: darkMode
          ? "0px -15px 40px rgba(0, 0, 0, 0.3)"
          : "0px -15px 40px rgba(0, 90, 116, 0.08)",
      }}
    >
      <Button
        href="#home"
        variant="contained"
        color="primary"
        sx={{
          borderRadius: "50%",
          minWidth: "50px",
          height: "50px",
          p: 0,
          position: "absolute",
          top: "-25px",
          animation: `${bounce} 2s infinite ease-in-out`,
          boxShadow: (theme) => `0px 8px 20px ${theme.palette.primary.main}40`,
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <KeyboardArrowUp
          fontSize="large"
          sx={{ color: darkMode ? "#002641" : "#ffffff" }}
        />
      </Button>

      <Typography
        id="contact"
        fontWeight={700}
        textAlign="center"
        sx={{
          mb: 6,
          mt: 2,
          color: "text.primary",
          fontSize: {
            xs: "1.3rem",
            sm: "1.5rem",
            md: "1.7rem",
            lg: "1.9rem",
          },
          letterSpacing: "-0.02em",
        }}
      >
        {t("contact.thanks")}
      </Typography>

      <Box
        display="flex"
        flexDirection={matchesMd ? "column" : "row"}
        gap={4}
        width="100%"
        maxWidth="850px"
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 4 }}
      >
        <Paper
          elevation={darkMode ? 4 : 6}
          sx={{
            width: matchesMd ? "100%" : 340,
            borderRadius: "16px",
            overflow: "hidden",

            backgroundColor: (theme) => `${theme.palette.primary.main}12`,
            border: "1px solid",
            borderColor: (theme) => `${theme.palette.primary.main}30`,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              transform: "translateY(-8px)",

              backgroundColor: (theme) => `${theme.palette.primary.main}24`,
              borderColor: "primary.main",
              boxShadow: (theme) =>
                darkMode
                  ? `0px 20px 35px rgba(0, 0, 0, 0.5), 0px 0px 15px ${theme.palette.primary.main}30`
                  : `0px 20px 35px ${theme.palette.primary.main}25`,
              "& .launch-icon": { opacity: 1, transform: "translate(0, 0)" },
            },
          }}
        >
          <Button
            component="a"
            href="https://www.linkedin.com/in/ericles-willian-263190200/"
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 150,
              p: 3,
              borderRadius: "16px",
              textTransform: "none",
              color: "text.primary",
              position: "relative",
            }}
          >
            <Launch
              className="launch-icon"
              sx={{
                position: "absolute",
                top: 14,
                right: 14,
                fontSize: "0.95rem",
                opacity: 0.3,
                color: "primary.main",
                transition: "all 0.2s ease",
              }}
            />

            <Box display="flex" alignItems="center" gap={1} mb={1.5}>
              <LinkedIn color="primary" sx={{ fontSize: "1.8rem" }} />
              <Typography variant="h6" fontWeight={700} color="primary.main">
                {t("contact.linkedinLabel")}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
              sx={{ opacity: 0.85, lineHeight: 1.5, px: 1 }}
            >
              {t("contact.linkedinDescription")}
            </Typography>
          </Button>
        </Paper>

        <Paper
          elevation={darkMode ? 4 : 6}
          sx={{
            width: matchesMd ? "100%" : 340,
            borderRadius: "16px",
            overflow: "hidden",

            backgroundColor: (theme) => `${theme.palette.primary.main}12`,
            border: "1px solid",
            borderColor: (theme) => `${theme.palette.primary.main}30`,
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              transform: "translateY(-8px)",

              backgroundColor: (theme) => `${theme.palette.primary.main}24`,
              borderColor: "primary.main",
              boxShadow: (theme) =>
                darkMode
                  ? `0px 20px 35px rgba(0, 0, 0, 0.5), 0px 0px 15px ${theme.palette.primary.main}30`
                  : `0px 20px 35px ${theme.palette.primary.main}25`,
              "& .launch-icon": { opacity: 1, transform: "translate(0, 0)" },
            },
          }}
        >
          <Button
            component="a"
            href="mailto:ewnsilva@gmail.com"
            fullWidth
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 150,
              p: 3,
              borderRadius: "16px",
              textTransform: "none",
              color: "text.primary",
              position: "relative",
            }}
          >
            <Launch
              className="launch-icon"
              sx={{
                position: "absolute",
                top: 14,
                right: 14,
                fontSize: "0.95rem",
                opacity: 0.3,
                color: "primary.main",
                transition: "all 0.2s ease",
              }}
            />

            <Box display="flex" alignItems="center" gap={1} mb={1.5}>
              <Email color="primary" sx={{ fontSize: "1.8rem" }} />
              <Typography variant="h6" fontWeight={700} color="primary.main">
                {t("contact.emailLabel")}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
              sx={{ opacity: 0.85, lineHeight: 1.5, px: 1 }}
            >
              {t("contact.emailDescription")}
            </Typography>
          </Button>
        </Paper>
      </Box>

      <Box sx={{ mb: 2, mt: 6, opacity: 0.6, textAlign: "center" }}>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ letterSpacing: "0.03em" }}
        >
          © {new Date().getFullYear()} Ericles Willian. Built with React & MUI.
        </Typography>
      </Box>
    </Paper>
  );
};
