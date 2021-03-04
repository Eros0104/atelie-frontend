import React from "react";
import { Container, Input, Button, Grid, GridItem, H1, P } from "@components";

const SignUpForm = ({ onLoginClick, onRegisterClick }) => (
  <Container>
    <H1 white>Cadastre-se</H1>
    <P white>
      Preencha os campos abaixo para validar
      sua participação na campanha e concorrer aos prêmios.
    </P>
    <Grid spacing={5}>
      <GridItem xs={12}>
        <Input label="Nome" placeholder="Nome" />
      </GridItem>
      <GridItem xs={12} md={6}>
        <Input label="CPF" placeholder="000.000.000-00" />
      </GridItem>
      <GridItem xs={12} md={6}>
        <Input label="E-mail" />
      </GridItem >
      <GridItem xs={12} md={6}>
        <Input />
      </GridItem>
      <GridItem xs={12} md={6}>
        <Input />
      </GridItem>
      <GridItem xs={12} md={6}>
        <Input />
      </GridItem>
      <GridItem xs={12} md={6}>
        <Input />
      </GridItem>
      <GridItem xs={12}>
        <Button>Enviar</Button>
      </GridItem>
    </Grid>
  </Container>
);

export default SignUpForm;
