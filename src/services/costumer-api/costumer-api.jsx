
import { post, validateCostumer } from '@utils';

const signUpCostumer = async (data) => {
  const { errorTree, isValid} = validateCostumer(data)
  if(isValid){
    const response = await post('/costumer', data);
    return { errorTree: errorTree, response: response } 
  }
  else {
    alert("erro")
    return { errorTree: errorTree, response: {}}
  }
}

export { signUpCostumer }
