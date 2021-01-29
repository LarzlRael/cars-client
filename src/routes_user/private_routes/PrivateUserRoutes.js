import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom'

import LoginContext from '../../components/login/LoginContext';

const PrivateUserRoutes = ({ component: Component, ...props }) => {

    const loginContext = useContext(LoginContext);

    const { autenticado, authUser, cargando } = loginContext;

    //? Usando el useEffect para obtener los datos del usuario
    useEffect(() => {
        authUser();
        // eslint-disable-next-line
    }, [])

    return (
        <Route {...props}
            render={props => !autenticado && !cargando ?
                (<Redirect to='/' />)
                :
                (<Component {...props} />)}
        />


    );
}

export default PrivateUserRoutes;