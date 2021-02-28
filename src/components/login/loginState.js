import React, { useReducer } from 'react';
import Swal from 'sweetalert2'

//? context
import LoginContext from './LoginContext';

import { GOOGLE_SIGN_IN, LOG_OUT, SIGN_IN_FAIL, SIGN_IN_SUCCESS, GET_USER, REGISTER, REGISTER_FAIL, LOGIN_ADMIN_SUCCESS, GET_ADMIN_USER, FACEBOOK_LOGIN } from '../../types';
import loginReducer from './loginReducer';

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token_auth';

const LoginState = (props) => {

    //const { history } = props;

    let getUserFromLocalStorage = localStorage.getItem('user') || [];
    const initialState = {

        user: getUserFromLocalStorage,
        token: localStorage.getItem('token'),
        autenticado: '',
        mensaje: '',
        mensaje_login_error: '',
        cargando: true,
        registro_exitoso: false,

        //? if admin is autenticaded is true 
        s_admin_auth: '',
        //? store for admin detaills
        s_autenticado_admin: '',

    }
    //? crear  el distpach y el state
    const [state, dispatch] = useReducer(loginReducer, initialState);

    const sign_in = async (user) => {


        try {
            const resultado = await clienteAxios.post('/login', { email: user.email, password: user.password });

            dispatch({
                type: SIGN_IN_SUCCESS,
                payload: resultado.data
            });

            authUser();

        } catch (error) {

            dispatch({
                type: SIGN_IN_FAIL,
                payload: error.response.data.error
            });
            Swal.fire({
                title: 'Hubo un error',
                text: error.response.data.error,
                icon: 'error',
                confirmButtonText: 'Reintentar'
            });
        }
    }
    const facebook_singin = async (user) => {


        try {
            const resultado = await clienteAxios.post('/login/facebookLogin', { email: user.email, name: user.name });

            dispatch({
                type: FACEBOOK_LOGIN,
                payload: resultado.data
            });

            authUser();

        } catch (error) {

            dispatch({
                type: SIGN_IN_FAIL,
                payload: error.response.data.error
            });
            Swal.fire({
                title: 'Hubo un error',
                text: error.response.data.error,
                icon: 'error',
                confirmButtonText: 'Reintentar'
            });
        }
    }

    const register = async (user) => {
        try {
            await clienteAxios.post(`/users/newuser`, user)
                .catch((error) => {
                    // console.log(e)
                    console.log(error.response.data.error);
                    dispatch({
                        type: REGISTER_FAIL,
                        payload: error.response.data.error
                    });

                    Swal.fire({
                        title: 'Error al registrarse',
                        text: error.response.data.error,
                        icon: 'error',
                        confirmButtonText: 'Reintentar'
                    })

                });

            dispatch({
                type: REGISTER,
                payload: 'Registro realizado correctamente'
            });

            Swal.fire({
                title: 'Registro Exitoso',
                text: 'Se ha registrado corretamente',
                icon: 'success',
                confirmButtonText: 'Continuar'
            })

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
    //? function to logout
    const cerrarSesion = () => {
        dispatch({
            type: LOG_OUT,
        });


    }

    const fauthUserAdmin = async () => {


        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token);
        }

        try {
            //console.log('solicitando usuario');
            const respuesta = (await clienteAxios.get('login/getadminuser')).data;
            // console.log(respuesta);
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

        const token = localStorage.getItem('token');
        if (token) {
            //console.log('hay token')
            tokenAuth(token);
        }

        try {
            //console.log('solicitando usuario');
            const respuesta = (await clienteAxios.get('login/getuser')).data;
            //console.log(respuesta);
            localStorage.setItem('user', JSON.stringify(respuesta));

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

        // console.log(props);
        try {
            const resultado = await clienteAxios.post('/login/loginadmin', {
                email: user.email,
                password: user.password
            });

            dispatch({
                type: LOGIN_ADMIN_SUCCESS,
                payload: resultado.data
            });

            // view here 

            fauthUserAdmin();



        } catch (error) {
            console.log(error)
            dispatch({
                type: SIGN_IN_FAIL,
                payload: error.response.data.error
            });
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

                s_admin_auth: state.s_admin_auth,
                s_autenticado_admin: state.s_autenticado_admin,

                //* funciones
                sign_in,
                google_singin,
                facebook_singin,
                cerrarSesion,
                authUser,
                register,
                adminLogin,
                fauthUserAdmin,

            }}
        >
            {props.children}
        </LoginContext.Provider>
    )

}


export default LoginState;



