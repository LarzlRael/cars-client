import clienteAxios from "./axios";

//? funcione que sirve para poder enviar los headers

const tokenAuth = (token) => {
    if (token) {
        clienteAxios.defaults.headers.common['token'] = token;
    } else {
        delete clienteAxios.defaults.headers.common['token'];
    }
}

export default tokenAuth;