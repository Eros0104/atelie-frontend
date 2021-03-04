import React from 'react';
import { Container, Input, Button, H1, P } from '@components';

const SignUpForm = () => (
  <Container>
    <H1 white>Cadastre-se</H1>
    <P white>
      Preencha os campos abaixo para validar
      sua participação na campanha e concorrer aos prêmios.
    </P>
    <Input/>
    <Button>Enviar</Button>
  </Container>
);

export default SignUpForm;
