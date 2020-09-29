import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom'

import LoginContext from '../components/login/LoginContext';

const PrivateAdminRoutes = ({ component: Component, ...props }) => {

    const loginContext = useContext(LoginContext);

    const { admin_auth, authUserAdmin, cargando } = loginContext;



    //? Usando el useEffect para obtener los datos del usuario
    useEffect(() => {
        authUserAdmin();
        // eslint-disable-next-line
    }, []);

    return (
        <Route {...props}
            render={props => !admin_auth && !cargando ?
                (<Redirect to='/admin' />)
                :
                (<Component {...props} />)}
        />


    );
}

export default PrivateAdminRoutes;