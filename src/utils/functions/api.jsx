import axios from 'axios';

const baseURL = "https://virtserver.swaggerhub.com/ateliedepropaganda/register/1.0.0";

const post = async (url, data) => await axios.post(baseURL+url, data)

export { post };
