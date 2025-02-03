import { SxProps, Typography } from "@mui/material";

export const Title: React.FC<{ children: string; styles?: SxProps }> = ({
  children,
  styles,
}) => {
  return (
    <Typography
      color={"primary"}
      variant="h4"
      fontWeight={600}
      id="projects"
      paddingTop={10}
      sx={{
        ...styles,
        fontSize: {
          xs: "1.5rem",
          sm: "2rem",
          md: "2.5rem",
          lg: "3rem",
        },
      }}
    >
      {children}
    </Typography>
  );
};
