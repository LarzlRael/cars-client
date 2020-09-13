import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./styles/login-register.scss"

const Register = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        last_name: '',
        direction: ''
    })
    const { name, email, password, last_name, direction } = user;
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

            <div className="form-title">
                Registrarse
                    <span>Obtener una cuenta</span>
            </div>
            <form className="form-register" onSubmit={onSubmithandler}>

                <div className="grupo-label">
                    <label htmlFor="nombre">Nombre</label>
                    <input className="input"
                        name="name"
                        type="text"
                        onChange={onChange}
                        value={name}
                        id="nombre" />
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
                <div className="grupo-label">
                    <label htmlFor="password2">Repetir Contraseña</label>
                    <input className="input"
                        name="password2"
                        type="password"
                        onChange={onChange}
                        value={password}
                        id="password2" />
                </div>
                <div className="grupo-label">
                    <label htmlFor="apellido">Apellido</label>
                    <input className="input"
                        name="last_name"
                        type="text"
                        onChange={onChange}
                        value={last_name}
                        id="apellido" />
                </div>
                <div className="grupo-label">
                    <label htmlFor="direccion">Dirección</label>
                    <input className="input"
                        name="direction"
                        type="text"
                        onChange={onChange}
                        value={direction}
                        id="direccion" />
                </div>
                <div className="group-button">
                    <button className="login-button">Crear Cuenta</button>

                </div>
                <div className="message-button">
                    <label htmlFor="" >¿Ya tienes Cuenta?</label> <Link className="register" to="/login">Iniciar Sesion</Link>
                </div>



            </form>
        </div>
    )
}

export default Register
