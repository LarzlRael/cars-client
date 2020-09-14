import React, { useReducer } from 'react';
//? context
import LoginContext from './LoginContext';

import { GOOGLE_SIGN_IN, LOG_OUT, SIGN_IN_FAIL, SIGN_IN_SUCCESS, GET_USER, REGISTER, REGISTER_FAIL } from '../../types';
import loginReducer from './loginReducer';

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token_auth';


const LoginState = props => {

    const initialState = {

        user: [],
        token: localStorage.getItem('token'),
        autenticado: null,
        mensaje: null,
        cargando: true,
        registro_exitoso: false

    }
    //? crear  el distpach y el state
    const [state, dispatch] = useReducer(loginReducer, initialState);

    const sign_in = async (user) => {

        console.log(user);
        try {
            const resultado = await clienteAxios.post(`/login`, { email: user.email, password: user.password });
            console.log(resultado.data);
            dispatch({
                type: SIGN_IN_SUCCESS,
                payload: resultado.data
            });

            authUser();

        } catch (error) {
            dispatch({
                type: SIGN_IN_FAIL,
                payload: 'ERROR'
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

    const authUser = async () => {
        console.log('gert user ON')

        const token = localStorage.getItem('token');
        if (token) {
            console.log('hay token')
            tokenAuth(token);
        }

        try {
            const respuesta = await clienteAxios.get('login/getuser');
            console.log(respuesta);
            dispatch({
                type: GET_USER,
                payload: respuesta.data
            })

        } catch (error) {
            dispatch({
                type: SIGN_IN_FAIL,
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

                //* funciones
                sign_in,
                google_singin,
                cerrarSesion,
                authUser,
                register
            }}
        >
            {props.children}
        </LoginContext.Provider>
    )

}


export default LoginState;



