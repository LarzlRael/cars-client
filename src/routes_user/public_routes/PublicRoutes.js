import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom'
import LoginContext from '../../components/login/LoginContext';


const PublicRoutes = ({ component: Component, ...props }) => {

    const loginContext = useContext(LoginContext);

    const { autenticado, cargando } = loginContext;


    return (
        <Route {...props}
            render={props => autenticado && !cargando ?
                (<Redirect to='/cars' />)
                :
                (<Component {...props} />)}
        />


    );
}

export default PublicRoutes;