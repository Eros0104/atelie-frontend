import { isCPFValid, isEmailValid, isObjectFieldsEmpty } from '@utils';

const getEmptyCustomerObject = () => ({
  name: "",
  cpf: "",
  email: "",
  password: "",
  passwordConfirm: "",
  company: "",
  classification: "",
});

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

  if(!data.classification)
    errorTree.classification = "Escolha uma Classificação!"
    
  return { errorTree: errorTree, isValid: isObjectFieldsEmpty(errorTree)};
}

export { getEmptyCustomerObject, validateCostumer };
