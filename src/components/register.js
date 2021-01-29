import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'


import LoginContext from './login/LoginContext';
import ErrorLabel from './error-label';

const Register = () => {

    const loginContext = useContext(LoginContext);

    const { register, mensaje, registro_exitoso } = loginContext;

    const [user, setUser] = useState({
        name: 'larzdosan',
        email: 'rael.thasss@gmail.com',
        password: '123456789',
        password2: '123456789',
        last_name: 'last',
        direction: ''
    });

    var expresiones = {

        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{8,35}$/,
        last_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        direction: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    };

    const [Error, setError] = useState({
        name: '',
        email: '',
        password: '',
        last_name: '',
        direction: ''
    });

    const { name, email, password, password2, last_name, direction } = user;
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
        setError({
            ...Error,
            name: '',
            email: '',
            password: '',
            last_name: ''
        });
    }

    const onSubmithandler = (e) => {
        e.preventDefault();

        const {
            name,
            email,
            password,
            password2,
            last_name,
        } = user;

        validar_campo(expresiones.name, name, 'Ingrese un nombre valido', 'name');
        validar_campo(expresiones.last_name, last_name, 'Ingrese un apellido valido', 'last_name');
        validar_campo(expresiones.email, email, 'Ingrese un email valido', 'email');
        validar_campo(expresiones.password, password, 'Tu contraseña debe ser de al menos 5 caracteres', 'password');

        validar_contraseña(password, password2);

        //? ver si hay error en 
        if (!isEmpty(Error)) {
            register(user);
        }
    }
    function isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;

    }

    const validar_contraseña = (password1, password2) => {
        if (password1 !== password2) {
            setError({
                ...Error,
                password: 'Las contraseñas deben ser iguales'
            })
        }
    }
    const validar_campo = (expresion, valor, error_mensaje, campo) => {
        if (!expresion.test(valor)) {

            setError({
                ...Error,
                [campo]: error_mensaje
            })
        }
    }


    return (
        <div className="form-container animate__animated animate__fadeInRight">

            <div className="form-title">
                Registrarse
                    <span>Obtener una cuenta</span>
            </div>
            <form className="form-register" onSubmit={onSubmithandler}>

                <div className="grupo-label">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        // input-error
                        className={Error.name ? 'input-error' : 'input'}
                        name="name"
                        type="text"
                        onChange={onChange}
                        value={name}
                        id="nombre" />

                    {Error.name ? <ErrorLabel message={Error.name} /> : ''}
                </div>

                <div className="grupo-label">
                    <label htmlFor="apellido">Apellido</label>
                    <input
                        className={Error.last_name ? 'input-error' : 'input'}
                        name="last_name"
                        type="text"
                        onChange={onChange}
                        value={last_name}
                        id="apellido" />
                    {Error.last_name ? <ErrorLabel message={Error.last_name} /> : ''}
                </div>

                <div className="grupo-label">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        className={Error.email ? 'input-error' : 'input'}
                        type="text"
                        name="email"
                        placeholder="Ejm. juan@email.com"
                        onChange={onChange}
                        value={email}
                        id="email" />

                    {Error.email ? <ErrorLabel message={Error.email} /> : ''}


                </div>

                <div className="grupo-label">
                    <label htmlFor="direccion">Dirección</label>
                    <input
                        className="input"
                        name="direction"
                        type="text"
                        onChange={onChange}
                        value={direction}
                        id="direccion" />
                </div>

                <div className="grupo-label">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        className={Error.password ? 'input-error' : 'input'}
                        name="password"
                        type="password"
                        onChange={onChange}
                        value={password}
                        id="password" />
                    {Error.password && <ErrorLabel message={Error.password} /> }
                </div>
                <div className="grupo-label">
                    <label htmlFor="password2">Repetir Contraseña</label>
                    <input
                        className={Error.password ? 'input-error' : 'input'}
                        name="password2"
                        type="password"
                        onChange={onChange}
                        value={password2}
                        id="password2" />
                </div>
                <div className="group-button">
                    <button className="login-button">Crear Cuenta</button>

                </div>
                <div className="message-button">
                    <label htmlFor="" >¿Ya tienes Cuenta?</label> <Link className="register" to="/login">Iniciar Sesion</Link>
                    {mensaje && <h4
                        className={registro_exitoso ? 'message-success' : 'error-message'}>{mensaje}
                        {registro_exitoso ?
                            <i className="fas fa-check"></i> :
                            <i className="fas fa-times"></i>}
                    </h4>}
                </div>

            </form>
        </div>
    )
}

export default Register
