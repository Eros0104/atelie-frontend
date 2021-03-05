import React, { useState } from 'react';
import { Input, Button, Grid, GridItem, H1, P, Modal } from '@components';
import { CPFInput, CategorySelect } from '@custom-components';
import { getEmptyCustomerObject } from '@utils';
import { signUpCostumer } from "@services"

const SignUpForm = () => {
  const [data, setData] = useState(getEmptyCustomerObject());
  const [modal,setModal] = useState({
    isOpen: false,
    message: "",
  });
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
    if (response.response.status === 201) {
      setModal({
        isOpen: true,
        message: "Cadastrado com sucesso!"
      })
    }
    setErrorTree(response.errorTree)
  }

  return (
    <>
      <Modal isOpen={modal.isOpen}>
        {modal.message}
      </Modal>
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
          <Button horizontalPadding="40px" onClick={onSend}>Enviar</Button>
        </GridItem>
      </Grid>
    </>
  );
};

export default SignUpForm;
