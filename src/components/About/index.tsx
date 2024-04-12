import { Box, Typography, useMediaQuery } from "@mui/material";

export const About = () => {
  const matchesMd = useMediaQuery("(max-width:850px)");

  return (
    <Box mb={5}>
      <Typography id="about" variant="h3" textAlign={"center"} paddingTop={10}>
        Sobre
      </Typography>
      <Box
        display={"flex"}
        flexDirection={matchesMd ? "column" : "row"}
        justifyContent={"center"}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <Box
          border={"5px solid black"}
          sx={{
            width: matchesMd ? "250px" : "50%",
            height: "200px",
            margin: "20px",
            justifyContent: "center",
          }}
        />
        <Typography
          m={2}
          textAlign={"justify"}
          width={matchesMd ? "95%" : "50%"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          suscipit faucibus porta. Ut aliquet lorem malesuada, volutpat sapien
          eu, bibendum dolor. Integer rutrum, sapien non sagittis luctus, eros
          quam cursus ipsum, quis dapibus erat purus eu lorem. Etiam interdum
          pretium est, ac vulputate augue ornare quis. Nunc ex enim, commodo sit
          amet tempor ac, sagittis eu arcu. Ut sollicitudin non purus sit amet
          ultricies. Aenean eget quam eleifend velit aliquet convallis. Maecenas
          mattis enim nisi, id tempor ante tempus id. Donec euismod diam egestas
          tortor pulvinar congue. Cras consectetur neque nec urna pretium
          pharetra. Ut diam sem, volutpat quis lobortis et, luctus rutrum metus.
          Quisque vulputate laoreet tellus, vel commodo nisi mollis vitae.
          Integer sit amet ex risus. Nulla ullamcorper augue.
        </Typography>
      </Box>
    </Box>
  );
};
