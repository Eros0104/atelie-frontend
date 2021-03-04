
import { post } from '@utils';

const signUp = ({ data }) => {
  post('register/1.0.0', data)
}

export { signUp }
