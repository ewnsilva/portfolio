import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { keyframes } from "@mui/system";
import { useLanguage } from "hooks/useLanguage";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { photos } from "utils";

export const Home = () => {
  const { t } = useLanguage();
  const matchesMd = useMediaQuery("(max-width:870px)");

  const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  return (
    <>
      <Typography
        id="home"
        variant="h5"
        sx={{ color: "transparent", height: 0, margin: 0, fontSize: 0 }}
      >
        Home
      </Typography>

      <Box
        mb={20}
        display={"flex"}
        flexDirection={matchesMd ? "column-reverse" : "row"}
        alignItems={"center"}
        justifyContent={"center"}
        columnGap={matchesMd ? 0 : 15}
        rowGap={6}
        sx={{
          minHeight: "80vh",
          maxWidth: "1400px",
          width: "100%",
          margin: "0 auto",
          animation: `${fadeIn} 1s ease-out`,
          px: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            maxWidth: matchesMd ? "100%" : "650px",
            textAlign: matchesMd ? "center" : "left",
            display: "flex",
            flexDirection: "column",
            alignItems: matchesMd ? "center" : "flex-start",
          }}
        >
          <Typography
            color={"primary"}
            variant="h3"
            mb={1}
            sx={{
              fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem", lg: "5rem" },
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            {t("home.name")}
          </Typography>

          <Typography
            color="text.primary"
            variant="h4"
            mb={3}
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.6rem", md: "2.2rem" },
              fontWeight: 600,
              color: "primary.light",
            }}
          >
            {t("home.role")}
          </Typography>

          <Typography
            variant="body1"
            mb={5}
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              lineHeight: 1.7,
              color: "text.primary",
              maxWidth: "550px",
              opacity: 0.9,
            }}
          >
            {t("home.intro")}
          </Typography>

          <Box
            display="flex"
            gap={3}
            flexDirection={
              useMediaQuery("(max-width:400px)") ? "column" : "row"
            }
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              href="#projects"
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1.1rem",
                px: 4,
                py: 1.5,
              }}
            >
              {t("home.buttons.projects")}
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              href="#contact"
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1.1rem",
                px: 4,
                py: 1.5,
              }}
            >
              {t("home.buttons.contact")}
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: { xs: "280px", sm: "350px", md: "450px", lg: "520px" },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "90%",
              height: "90%",
              borderRadius: "50%",
              background: (theme) =>
                `radial-gradient(circle, ${theme.palette.primary.main}30 0%, transparent 70%)`,
              filter: "blur(40px)",
              zIndex: 0,
            }}
          />

          <Box
            component="img"
            src={photos[1].image}
            alt={photos[1].name}
            sx={{
              width: "100%",
              height: "auto",
              zIndex: 1,
              borderRadius: "24px",
              borderColor: "primary.main",
              boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.5)",
              transition: "transform 0.4s ease",
              "&:hover": {
                transform: "scale(1.04)",
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};
