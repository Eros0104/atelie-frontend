import axios from 'axios';

const baseURL = "virtserver.swaggerhub.com/ateliedepropaganda/";

const post = (url, data) => axios.post(baseURL+url, data)
.then(res => {
  const persons = res.data;
  this.setState({ persons });
})

export { post };
