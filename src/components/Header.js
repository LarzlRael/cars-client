import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import LoginContext from './login/LoginContext'


const Header = () => {

    const loginContext = useContext(LoginContext);

    const { user, autenticado, authUser, cerrarSesion } = loginContext;
    console.log('autentcado: ', autenticado)
    useEffect(() => {
        authUser();
    }, []);

    const logout = () => {
        cerrarSesion()
    }

    return (
        <header className="header">
            <div className="logo">
                <Link to="/" className="logo-link">Logo</Link>

            </div>
            <div className="links">
                <Link to="/" className="link">Home</Link>
                <Link to="/cars" className="link">Ver automoviles</Link>
                <Link to="/cars" className="link">opcion1</Link>
                <Link to="/cars" className="link">opcion2</Link>

                <Link className="link">{autenticado ? user.user_name : 'Registrarse'}</Link>


                {autenticado ? <a className="link" onClick={logout}>Cerrar Sesion</a> :
                    <Link to="/login" className="link">Iniciar sesion</Link>}


            </div>
        </header>
    )
}

export default Header
