import React, { useContext, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { CARS, INICIO, LOGIN } from '../routes/routes';

import LoginContext from './login/LoginContext'
import SimpleMenu from './MenuProfile';


const Header = () => {

    const loginContext = useContext(LoginContext);

    const { user, autenticado, authUser, cerrarSesion } = loginContext;
    // console.log('autentcado: ', autenticado)
    useEffect(() => {
        authUser();
        // eslint-disable-next-line
    }, []);

    console.log(user);
    
    const logout = () => {
        cerrarSesion()
    }

    return (
        <header className="header">
            <div className="logo">
                <Link to={INICIO} className="logo-link">Logo</Link>

            </div>
            <div className="links">
                <NavLink
                    to={INICIO}
                    className="link"
                    activeClassName="active"
                >Home</NavLink>

                <NavLink
                    to={CARS}
                    className="link"
                    activeClassName="active"
                >
                    Ver automoviles</NavLink>


                {!autenticado ?
                    <NavLink
                        to={LOGIN}
                        className="link"
                        activeClassName="active"
                    >
                        Iniciar sesion</NavLink> :
                    null}

                {autenticado ?
                    <SimpleMenu userName={user.name} lastName={user.last_name} logout={logout} /> : null
                }

            </div>
        </header>
    )
}

export default Header
