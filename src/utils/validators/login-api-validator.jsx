import { isCPFValid, isObjectFieldsEmpty } from '@utils';

const getEmptyLoginObject = () => ({
  cpf: "",
  password: "",
});

const validateLogin = (data) => {
  const errorTree = getEmptyLoginObject();

  if (!isCPFValid(data.cpf))
    errorTree.cpf = "Digite um CPF válido!";

  if (!data.password)
    errorTree.password = "Por favor preencha a senha!";
    
  return { errorTree: errorTree, isValid: isObjectFieldsEmpty(errorTree)};
}

export { getEmptyLoginObject, validateLogin };
