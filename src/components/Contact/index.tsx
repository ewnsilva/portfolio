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
      <Typography id="contact" variant="h4" mb={2} paddingTop={10}>
        Entre em Contato
      </Typography>

      <Box display={"flex"} justifyContent={"space-between"} width={700}>
        <Box>
          <Box>
            <b>Email: </b>ewnsilva@gmail.com{" "}
          </Box>
          <Box>
            <b>Telefone: </b>
            {"(12) 98256-2145"}
          </Box>
        </Box>
        <FormControl
          sx={{
            width: "60%",
            border: "2px solid black",
            borderRadius: 3,
            p: 2,
          }}
        >
          <TextField label={"Seu Nome"} sx={{ mb: 2 }} />
          <TextField label={"Seu Email"} sx={{ mb: 2 }} />
          <TextField
            label={"Sua Mensagem"}
            multiline
            minRows={4}
            sx={{ mb: 2 }}
          />
          <Button variant="contained">Enviar</Button>
        </FormControl>
      </Box>
    </Box>
  );
};
