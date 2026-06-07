import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { keyframes } from "@mui/system";
import { useLanguage } from "hooks/useLanguage";
import { Title } from "components";
import { photos } from "utils";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const About = () => {
  const { t } = useLanguage();
  const theme = useTheme();
  const matchesMd = useMediaQuery("(max-width:870px)");

  return (
    <Box
      mb={matchesMd ? 12 : 23}
      sx={{
        animation: `${fadeInUp} 1.2s ease-out`,
        width: "100%",
      }}
    >
      <Title styles={{ textAlign: "center" }} id="about">
        {t("about.title")}
      </Title>

      <Box
        display="flex"
        flexDirection={matchesMd ? "column-reverse" : "row"}
        justifyContent="center"
        alignItems="center"
        gap={matchesMd ? 5 : 8}
        p={matchesMd ? 2 : 4}
        sx={{
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            width: matchesMd ? "100%" : "55%",
            textAlign: matchesMd ? "center" : "left",
            color: "text.primary",
            fontFamily: "inherit",
          }}
        >
          <Typography
            component="p"
            sx={{
              fontSize: {
                xs: "0.95rem",
                sm: "1.05rem",
                md: "1.15rem",
                lg: "1.2rem",
              },
              fontWeight: 400,
              lineHeight: 1.7,
              mb: 2.5,
              opacity: 0.9,
              "& strong": { color: "primary.main", fontWeight: 600 },
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: t("about.paragraph1") }} />
          </Typography>

          <Typography
            component="p"
            sx={{
              fontSize: {
                xs: "0.95rem",
                sm: "1.05rem",
                md: "1.15rem",
                lg: "1.2rem",
              },
              fontWeight: 400,
              lineHeight: 1.7,
              mb: 2.5,
              opacity: 0.9,
              "& strong": { color: "primary.main", fontWeight: 600 },
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: t("about.paragraph2") }} />
          </Typography>

          <Typography
            component="p"
            sx={{
              fontSize: {
                xs: "0.95rem",
                sm: "1.05rem",
                md: "1.15rem",
                lg: "1.2rem",
              },
              fontWeight: 400,
              lineHeight: 1.7,
              opacity: 0.9,
              "& strong": { color: "primary.main", fontWeight: 600 },
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: t("about.paragraph3") }} />
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: matchesMd ? "65%" : "35%",
            maxWidth: "380px",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              transform: "scale(1.03) translateY(-5px)",
              "& .back-card": {
                transform: "rotate(-4deg) translate(-8px, -8px)",
                borderColor: "primary.main",
              },
            },
          }}
        >
          <Box
            className="back-card"
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "16px",
              border: "2px solid",
              borderColor:
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(0, 90, 116, 0.15)",
              background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.primary.dark}25 100%)`,
              zIndex: 0,
              transform: "rotate(-2deg)",
              transition: "all 0.4s ease",
            }}
          />

          <Box
            component="img"
            src={photos[0].image}
            alt={photos[0].name}
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              zIndex: 1,
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              width: "90%",
              height: "90%",
              borderRadius: "16px",
              background: `radial-gradient(circle, ${theme.palette.primary.main}25 0%, transparent 70%)`,
              filter: "blur(25px)",
              zIndex: 0,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
