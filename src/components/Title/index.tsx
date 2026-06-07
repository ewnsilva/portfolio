import { SxProps, Theme, Typography, Box } from "@mui/material";

interface TitleProps {
  children: React.ReactNode;
  styles?: SxProps<Theme>;
  id: string;
}

export const Title: React.FC<TitleProps> = ({ children, styles, id }) => {
  const isCentered = (styles as any)?.textAlign === "center";

  return (
    <Box
      id={id}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: isCentered ? "center" : "flex-start",
        pt: 10,
        pb: 2,
        width: "100%",
      }}
    >
      <Typography
        color="primary"
        variant="h4"
        sx={{
          fontWeight: 800,
          letterSpacing: "-0.01em",
          textShadow: (theme) =>
            theme.palette.mode === "dark"
              ? "0px 4px 12px rgba(255, 255, 255, 0.05)"
              : "none",
          fontSize: {
            xs: "1.75rem",
            sm: "2.25rem",
            md: "2.75rem",
            lg: "3.2rem",
          },
          ...styles,
        }}
      >
        {children}
      </Typography>

      <Box
        sx={{
          mt: 1.5,
          width: "60px",
          height: "4px",
          borderRadius: "2px",
          backgroundColor: "primary.main",
          boxShadow: (theme) => `0px 2px 8px ${theme.palette.primary.main}60`,
        }}
      />
    </Box>
  );
};
