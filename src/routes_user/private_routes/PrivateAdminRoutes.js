import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom'

import LoginContext from '../../components/login/LoginContext';

const PrivateAdminRoutes = ({ component: Component, ...props }) => {

    const loginContext = useContext(LoginContext);

    const { s_admin_auth, fauthUserAdmin, cargando } = loginContext;

    
    //? Usando el useEffect para obtener los datos del usuario
    useEffect(() => {
        fauthUserAdmin();
        // eslint-disable-next-line
    }, []);
    
    localStorage.setItem('lastPath', props.location.pathname);

    return (
        <Route {...props}
            render={props => !s_admin_auth && !cargando ?
                (<Redirect to='/admin' />)
                :
                (<Component {...props} />)}
        />


    );
}

export default PrivateAdminRoutes;