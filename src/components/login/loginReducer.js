import { SIGN_IN_FAIL, SIGN_IN_SUCCESS, SIGN_UP, GOOGLE_SIGN_IN, LOG_OUT, GET_USER, REGISTER_FAIL, REGISTER } from "../../types";


export default (state, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:

            localStorage.setItem('token', action.payload.token);
            return {

                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false

            }
        case SIGN_UP:
            return {
                ...state,
                oneCar: action.payload,

            }

        case GET_USER:
            return {
                ...state,
                autenticado: true,
                user: action.payload,
                cargando: false
            }

        case SIGN_IN_FAIL:
        case LOG_OUT:
            localStorage.removeItem('token');
            console.log('cerrando sesion reducer')
            return {
                ...state,
                token: null,
                autenticado: null,
                cargando: false,

            }

        case GOOGLE_SIGN_IN:
            localStorage.setItem('token', action.payload.jwt_token);
            console.log(action.payload.jwt_token)
            return {
                ...state,
                user: action.payload.userdb,
                autenticado: true,
                mensaje: null,
                cargando: false

            }
        case REGISTER:
            return {
                ...state,
                mensaje: action.payload,
                registro_exitoso: true

            }
        case REGISTER_FAIL:

            localStorage.removeItem('token');
            return {
                ...state,
                mensaje: action.payload,
                registro_exitoso: false
            }
        default:
            return state;
    }
};