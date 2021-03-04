import { isCPFValid, isEmailValid } from '@utils';

const getEmptyCustomerObject = () => ({
  name: "",
  cpf: "",
  email: "",
  password: "",
  passwordConfirm: "",
  company: "",
  classification: "",
});

const checkFields = (obj) => {
  for (let key in obj) {
    if(key !== "")
      return false;
  }
  return true;
}

const validateCostumer = (data) => {
  const errorTree = getEmptyCustomerObject();
  if (!data.name)
    errorTree.name = "Por favor preencha o nome!";

  if (!isCPFValid(data.cpf))
    errorTree.cpf = "Digite um CPF válido!";

  if (!isEmailValid(data.email))
    errorTree.email = "Digite um email válido!";

  if (!data.password)
    errorTree.password = "Por favor preencha a senha!";

  if (data.password !== data.passwordConfirm)
    errorTree.password = "Senhas não coincidem!";

  if (!data.company)
    errorTree.company = "Por favor preencha a Empresa!";

  return { errorTree: errorTree, isValid: checkFields(errorTree)};
}

export { getEmptyCustomerObject, validateCostumer };
