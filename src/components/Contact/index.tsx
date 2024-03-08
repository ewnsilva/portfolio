import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

export const Contact = () => {
  const matchesMd = useMediaQuery("(max-width:850px)");

  return (
    <Box
      mb={10}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography variant="h4" mb={2}>
        Contato
      </Typography>

      <Box display={"flex"} justifyContent={"space-between"} width={500}>
        <Box>
          <Box>Email</Box>
          <Box>Telefone</Box>
        </Box>
        <FormControl sx={{ border: "5px solid black" }}>
          <TextField label={"Seu Nome"} />
          <TextField label={"Seu Email"} />
          <TextField label={"Sua Mensagem"} multiline minRows={4} />
          <Button>Enviar</Button>
        </FormControl>
      </Box>
    </Box>
  );
};
