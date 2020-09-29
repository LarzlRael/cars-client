import React, { useReducer } from 'react';
//? context
import LoginContext from './LoginContext';

import { GOOGLE_SIGN_IN, LOG_OUT, SIGN_IN_FAIL, SIGN_IN_SUCCESS, GET_USER, REGISTER, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_ADMIN_SUCCESS, GET_ADMIN_USER } from '../../types';
import loginReducer from './loginReducer';

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token_auth';
import { useHistory } from 'react-router-dom';


const LoginState = props => {

    //const { history } = props;

    const initialState = {

        user: [],
        token: localStorage.getItem('token'),
        autenticado: null,
        mensaje: null,
        mensaje_login_error: null,
        cargando: true,
        registro_exitoso: false,

        admin_auth: null,
        autenticado_admin: null,

    }
    //? crear  el distpach y el state
    const [state, dispatch] = useReducer(loginReducer, initialState);

    const history = useHistory();

    const sign_in = async (user) => {

        console.log(user);

        try {
            const resultado = await clienteAxios.post('/login', { email: user.email, password: user.password });

            dispatch({
                type: SIGN_IN_SUCCESS,
                payload: resultado.data
            });

            authUser();

        } catch (error) {
            console.log(error)
            dispatch({
                type: SIGN_IN_FAIL,
                payload: error.response.data.error
            })
        }
    }

    const register = async (user) => {
        try {
            const resultado = await clienteAxios.post(`/users/newuser`, user)
                .catch((error) => {
                    // console.log(e)
                    console.log(error.response.data.error);
                    dispatch({
                        type: REGISTER_FAIL,
                        payload: error.response.data.error
                    });
                });
            console.log(resultado.data)
            dispatch({
                type: REGISTER,
                payload: 'Registro realizado correctamente'
            });

        } catch (error) {
            // console.log('error al registrarse', error.error)

            // dispatch({
            //     type: SIGN_IN_FAIL,
            //     payload: 'ERROR'

            // })
        }
    }

    const google_singin = async (token) => {

        try {
            const resultado = await clienteAxios.post(`/login/google`, { token: token });
            console.log(resultado.data);
            dispatch({
                type: GOOGLE_SIGN_IN,
                payload: resultado.data
            })

        } catch (error) {
            dispatch({
                type: SIGN_IN_FAIL,
                payload: 'ERROR'
            })
        }
    }
    //? functon to logout
    const cerrarSesion = () => {
        dispatch({
            type: LOG_OUT,
        })
    }

    const authUserAdmin = async () => {
        console.log('admin use now')

        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token);
        }

        try {
            //console.log('solicitando usuario');
            const respuesta = (await clienteAxios.get('login/getadminuser')).data;
            console.log(respuesta);
            dispatch({
                type: GET_ADMIN_USER,
                payload: respuesta.userdb
            })

        } catch (error) {
            dispatch({
                type: SIGN_IN_FAIL,
            })
        }
    }
    const authUser = async () => {
        console.log('gert user ON')

        const token = localStorage.getItem('token');
        if (token) {
            //console.log('hay token')
            tokenAuth(token);
        }

        try {
            //console.log('solicitando usuario');
            const respuesta = (await clienteAxios.get('login/getuser')).data;

            //console.log(respuesta);

            dispatch({
                type: GET_USER,
                payload: respuesta.userdb
            })

        } catch (error) {
            dispatch({
                type: SIGN_IN_FAIL,
            })
        }

    }

    const adminLogin = async (user) => {

        console.log(props);
        try {
            const resultado = await clienteAxios.post('/login/loginadmin', { email: user.email, password: user.password });

            dispatch({
                type: LOGIN_ADMIN_SUCCESS,
                payload: resultado.data
            });

            authUserAdmin();

        } catch (error) {
            console.error(error)
            dispatch({
                type: SIGN_IN_FAIL,
                payload: error.response.data.error
            })
        }
    }

    return (
        <LoginContext.Provider
            value={{
                //? states
                user: state.user,
                autenticado: state.autenticado,
                mensaje: state.mensaje,
                registro_exitoso: state.registro_exitoso,
                mensaje_login_error: state.mensaje_login_error,
                cargando: state.cargando,
                admin_auth: state.admin_auth,

                //* funciones
                sign_in,
                google_singin,
                cerrarSesion,
                authUser,
                register,
                adminLogin,
                authUserAdmin,

            }}
        >
            {props.children}
        </LoginContext.Provider>
    )

}


export default LoginState;



