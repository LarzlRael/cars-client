import React, { useState, useContext, useEffect } from 'react';
import ErrorLabel from '../error-label';
import LoginContext from '../login/LoginContext';


import "./login-admin-styles.scss"

const AdminLogin = (props) => {
    const loginContext = useContext(LoginContext);

    const { adminLogin, mensaje_login_error, s_admin_auth } = loginContext;

    useEffect(() => {
        if (s_admin_auth) {
            props.history.push('admin/profile');

        }
        // eslint-disable-next-line
    }, [s_admin_auth])


    const [userAdmin, setUserAdmin] = useState({
        email: 'xdx@gmail.com',
        password: '123456789'
    });
    //? Error state
    const [Error, setError] = useState({
        error_message: null
    });
    const { error_message } = Error;
    const handleSumbit = (e) => {
        e.preventDefault();
        adminLogin(userAdmin);
        setError({
            ...Error,
            error_message: mensaje_login_error
        })
    }

    const { email, password } = userAdmin;

    const onChange = (e) => {
        setUserAdmin({
            ...userAdmin,
            [e.target.name]: e.target.value
        });
        setError({
            ...Error,
            error_message: null
        })

    }

    return (
        <div className="login-div animate__animated animate__fadeIn">
            <div className="form animate__animated animate__fadeInUp">
                <form className="formLogin" onSubmit={handleSumbit}>
                    <h3 className="title ">Login</h3>
                    <input
                        className={error_message ? 'input-login error' : 'input-login'}
                        placeholder="Usuario"
                        onChange={onChange}
                        name="email"
                        value={email}
                        type="text" />
                    <br />
                    <input
                        className={error_message ? 'input-login error' : 'input-login'}
                        placeholder="Contraseña"
                        onChange={onChange}
                        value={password}
                        name="password"
                        type="password" />

                    <button type="submit" className="button-login">Iniciar Sesion</button>

                    {error_message ?
                        <ErrorLabel message={error_message} /> : null}
                </form>
            </div>
            <div className="info-login animate__animated animate__fadeInDown">
                <h1>Adminstrar Cars System</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui ipsam numquam dolore quo, aperiam voluptates labore, error totam rem hic, minus incidunt autem nesciunt ea laborum temporibus enim tempora.</span>
            </div>
        </div>
    )
}

export default AdminLogin
