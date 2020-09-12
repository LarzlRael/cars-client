import axios from 'axios';

const url = 'http://localhost:4000';
const clienteAxios = axios.create({
    baseURL: url
})

export default clienteAxios;    