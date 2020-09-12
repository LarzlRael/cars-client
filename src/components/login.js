import React, { useState } from 'react'
import { TextField } from '@material-ui/core';
import "./styles/login-register.scss"
import { Link } from 'react-router-dom';
const Login = () => {


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
                </div>
                <div className="message-button">
                    <label htmlFor="" >¿No tienes Cuenta?</label> <Link className="register" to="/register">Registrare ahora</Link>
                </div>
            </form>
        </div>
    )
}

export default Login

