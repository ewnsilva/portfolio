import React from "react";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  message: yup.string().required("Mensagem é obrigatória"),
});

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    alert("Email enviado com sucesso!");
    reset();
  };

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

      <Box
        display={"flex"}
        flexDirection={matchesMd ? "column" : "row"}
        justifyContent={matchesMd ? "center" : "space-between"}
        alignItems={"center"}
      >
        <Box>
          <Box>
            <b>Email: </b>ewnsilva@gmail.com{" "}
          </Box>
          <Box>
            <b>Telefone: </b>
            {"(12) 98256-2145"}
          </Box>
        </Box>
        <FormControl>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
                alignItems: "end",
                border: "2px solid black",
                borderRadius: 3,
                p: 2,
              }}
            >
              <TextField
                fullWidth
                label={"Seu Nome"}
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label={"Seu Email"}
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label={"Sua Mensagem"}
                multiline
                minRows={4}
                {...register("message")}
                error={!!errors.message}
                helperText={errors.message?.message}
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ textAlign: "end" }}
              >
                Enviar
              </Button>
            </Box>
          </form>
        </FormControl>
      </Box>
    </Box>
  );
};
