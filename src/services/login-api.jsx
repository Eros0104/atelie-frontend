import { validateLogin } from '@utils';

const login = async (data) => {
  const { errorTree, isValid} = validateLogin(data)
  if(isValid){
    const response = { status: 202}
    console.log("sucesso!")
    return { errorTree: errorTree, response: response } 
  }
  else {
    return { errorTree: errorTree, response: {}}
  }
}

export { login }