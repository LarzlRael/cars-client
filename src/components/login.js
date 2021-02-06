import React, { useState, useContext, useEffect } from 'react'
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';

import LoginContext from './login/LoginContext';
import ErrorLabel from './error-label';
import { REGISTER } from '../routes/routes';
import { LoginFacebbok } from './login/LoginFacebbok';

const Login = ({history}) => {


    const loginContext = useContext(LoginContext);

    const { sign_in, google_singin, mensaje_login_error, autenticado } = loginContext;

    useEffect(() => {

        if (autenticado) {
            history.push('/cars');
            window.location.reload();
        }
        // eslint-disable-next-line
    }, [autenticado])

    const [user, setUser] = useState({
        email: 'xdxdxdxd@gmail.com',
        password: '123456789'
    })

    const { email, password } = user;
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmithandler = (e) => {
        e.preventDefault();
        console.log(user)
        sign_in(user);
    }

    //? Funciones para login 

    const login = (response) => {
        if (response.accessToken) {
            const token = response.tokenId
            google_singin(token);
        }
    }
    // const handleLoginFailure = (response) => {
    //     alert('Failed to log in')
    // }


    return (


        <div className="form-container animate__animated animate__fadeInLeft">

            <form onSubmit={onSubmithandler} className="form-login">
                <div className="form-title">
                    Iniciar Sesión
                <span>Para poder ver todos los carros!</span>

                </div>

                <div className="grupo-label">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input className="input"
                        type="text"
                        name="email"
                        placeholder="ejm juan@email.com"
                        onChange={onChange}
                        value={email}
                        id="email" />
                </div>
                <div className="grupo-label">
                    <label htmlFor="password">Contraseña</label>
                    <input className="input"
                        name="password"
                        type="password"
                        onChange={onChange}
                        value={password}
                        id="password" />
                </div>
                <div className="group-button">
                    <button className="login-button">Ingresar</button>

                    <GoogleLogin
                        className="google-button"
                        clientId={'865863604763-eul4q7i109a0bhac463gu28amo5u7645.apps.googleusercontent.com'}
                        buttonText='Iniciar sesión con Google'
                        onSuccess={login}
                        // onFailure={handleLoginFailure}

                        cookiePolicy={'single_host_origin'}
                        responseType='code,token'
                    />
                </div>
                {/* <LoginFacebbok /> */}
                <div className="message-button">
                    <label htmlFor="" >¿No tienes Cuenta?</label>
                    <Link className="register-label-link" to={REGISTER}>Registrare ahora</Link>
                </div>

                {mensaje_login_error && <ErrorLabel message={mensaje_login_error} />}

            </form>
        </div>
    )
}

export default Login;

