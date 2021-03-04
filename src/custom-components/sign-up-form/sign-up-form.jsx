import React from 'react';
import { Container, Input, Button, Grid, GridItem, H1, P } from '@components';
import { CPFInput } from '@custom-components';

const SignUpForm = () => (
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
        <CPFInput />
      </GridItem>
      <GridItem xs={12} md={6}>
        <Input label="E-mail" />
      </GridItem >
      <GridItem xs={12} md={6}>
        <Input label="Senha" type="password" placeholder="Digite sua Senha" />
      </GridItem>
      <GridItem xs={12} md={6}>
      <Input label="Senha" type="password" placeholder="Confirme sua Senha" />
      </GridItem>
      <GridItem xs={12} md={6}>
        <Input label="Empresa" placeholder="Empresa" />
      </GridItem>
      <GridItem xs={12} md={6}>
        <Input />
      </GridItem>
      <GridItem center xs={12}>
        <Button>Enviar</Button>
      </GridItem>
    </Grid>
  </Container>
);

export default SignUpForm;
