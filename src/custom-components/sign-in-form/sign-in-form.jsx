import React, { useState } from 'react';
import { Input, Button, H1, Grid, GridItem, Hyperlink, Small } from '@components';
import { CPFInput } from '@custom-components';
import { getEmptyLoginObject } from '@utils';
import { login } from "@services"

const SignInForm = () => {
  const [data, setData] = useState(getEmptyLoginObject());
  const [errorTree, setErrorTree] = useState({});

  const onChangeHandler = (evt) => {
    setData({
      ...data,
      [evt.target.name]: evt.target.value,
    });
  };

  const onSend = async () => {
    const response = await login(data)
    console.log(response.response)
    setErrorTree(response.errorTree)
  }

  return (
    <>
      <Grid spacing={5}>
        <GridItem xs={12} center>
          <H1 white>Login</H1>
        </GridItem>
        <GridItem xs={12}>
          <CPFInput
            noLabel
            name="cpf"
            placeholder="Digite seu CPF"
            error={errorTree.cpf}
            value={data.cpf}
            onChange={onChangeHandler}
          />
        </GridItem>
        <GridItem xs={12}>
          <Input
            name="password"
            type="password"
            placeholder="Digite sua Senha"
            error={errorTree.password}
            value={data.password}
            onChange={onChangeHandler}
          />
        </GridItem>
      </Grid>
      <Grid justify="space-between" direction="row" spacing={5}>
        <GridItem xs={12} md={5} center>
          <Small>
            <Hyperlink primary>
              Ainda não é cadastrado?
            </Hyperlink>
          </Small>
        </GridItem>
        <GridItem xs={12} md={5} center>
          <Small>
            <Hyperlink primary>
              Esqueceu sua senha?
            </Hyperlink>
          </Small>
        </GridItem>
      </Grid>
      <Grid spacing={10}>
        <GridItem xs={12} center>
          <Button horizontalPadding="40px" onClick={onSend}>Enviar</Button>
        </GridItem>
      </Grid>
    </>
  );
}

export default SignInForm;
