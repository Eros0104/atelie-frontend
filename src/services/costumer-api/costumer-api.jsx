
import { post, validateCostumer } from '@utils';

const signUpCostumer = (data) => {
  const { errorTree, isValid} = validateCostumer(data)
  if(isValid){
    alert("rodou")
    return { errorTree: errorTree, response: {}}
  }
  else {
    alert("erro")
    return { errorTree: errorTree, response: {}}
  }
  //post('register/1.0.0', data)
}

export { signUpCostumer }
