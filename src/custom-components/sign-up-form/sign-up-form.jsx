import React, { useState } from 'react';
import { Container, Input, Button, Grid, GridItem, H1, P } from '@components';
import { CPFInput, CategorySelect } from '@custom-components';
import { getEmptyCustomerObject } from '@utils';
import { signUpCostumer } from "@services"

const SignUpForm = () => {
  const [data, setData] = useState(getEmptyCustomerObject());
  const [errorTree, setErrorTree] = useState({});

  const onChangeHandler = (evt) => {
    setData({
      ...data,
      [evt.target.name]: evt.target.value,
    });
  };

  const onSend = async () => {
    const response = await signUpCostumer(data)
    console.log(response.response)
    setErrorTree(response.errorTree)
  }

  return (
    <Container>
      <Grid spacing={5}>
        <GridItem xs={12} center>
          <H1 white>Cadastre-se</H1>
        </GridItem>
        <GridItem xs={12} center>
          <P white>
            Preencha os campos abaixo para validar
            sua participação na campanha e concorrer aos prêmios.
          </P>
        </GridItem>
        <GridItem xs={12}>
          <Input
            label="Nome"
            name="name"
            placeholder="Nome"
            error={errorTree.name}
            value={data.name}
            onChange={onChangeHandler}
          />
        </GridItem>
        <GridItem xs={12} md={6}>
          <CPFInput
            name="cpf"
            error={errorTree.cpf}
            value={data.cpf}
            onChange={onChangeHandler}
          />
        </GridItem>
        <GridItem xs={12} md={6}>
          <Input
            placeholder="E-mail"
            name="email"
            label="E-mail"
            error={errorTree.email}
            onChange={onChangeHandler}
          />
        </GridItem >
        <GridItem xs={12} md={6}>
          <Input
            label="Senha"
            name="password"
            type="password"
            placeholder="Digite sua Senha"
            error={errorTree.password}
            value={data.password}
            onChange={onChangeHandler}
          />
        </GridItem>
        <GridItem xs={12} md={6}>
          <Input
            label="Senha"
            name="passwordConfirm"
            type="password"
            placeholder="Confirme sua Senha"
            error={errorTree.password}
            value={data.passwordConfirm}
            onChange={onChangeHandler}
          />
        </GridItem>
        <GridItem xs={12} md={6}>
          <Input
            name="company"
            label="Empresa"
            placeholder="Empresa"
            error={errorTree.company}
            value={data.company}
            onChange={onChangeHandler}
          />
        </GridItem>
        <GridItem xs={12} md={6}>
          <CategorySelect
            value={data.classification}
            name="classification"
            error={errorTree.classification}
            onChange={onChangeHandler}
          />
        </GridItem>
        <GridItem center xs={12}>
          <Button onClick={onSend}>Enviar</Button>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default SignUpForm;
