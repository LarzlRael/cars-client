import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import LoginContext from './login/LoginContext'
import SimpleMenu from './MenuProfile';


const Header = () => {

    const loginContext = useContext(LoginContext);

    const { user, autenticado, authUser, cerrarSesion } = loginContext;
    console.log('autentcado: ', autenticado)
    useEffect(() => {
        authUser();
       // eslint-disable-next-line
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


                {!autenticado ?
                    <Link to="/login" className="link">Iniciar sesion</Link> :
                    null}

                {autenticado ?
                    <SimpleMenu userName={user.name} lastName={user.last_name} logout={logout} /> : null
                }

            </div>
        </header>
    )
}

export default Header
