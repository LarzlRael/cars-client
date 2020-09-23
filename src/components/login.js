import React, { useState, useContext } from 'react'
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';

import "./styles/login-register.scss"
import LoginContext from './login/LoginContext';
import ErrorLabel from './error-label';

const Login = () => {

    const loginContext = useContext(LoginContext);

    const { sign_in, google_singin, mensaje_login_error } = loginContext;

    const [user, setUser] = useState({
        email: '',
        password: ''
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
    const handleLoginFailure = (response) => {
        alert('Failed to log in')
    }


    return (


        <div className="form-container">

            <form onSubmit={onSubmithandler} className="form-login">
                <div className="form-title">
                    Iniciar Sesión
                <span>Para poder todos los carros!</span>

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
                <div className="message-button">
                    <label htmlFor="" >¿No tienes Cuenta?</label> <Link className="register" to="/register">Registrare ahora</Link>
                </div>


                {mensaje_login_error ? <ErrorLabel message={mensaje_login_error} /> : ''}

            </form>
        </div>
    )
}

export default Login

