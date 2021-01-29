import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom'
import LoginContext from '../../components/login/LoginContext';



const PublicAdminRoutes = ({ component: Component, ...props }) => {

    const loginContext = useContext(LoginContext);

    const { s_admin_auth } = loginContext;

    localStorage.setItem('lastPath', props.location.pathname);

    return (
        <Route {...props}
            render={props => s_admin_auth ?
                (<Redirect to='/admin/profile' />)
                :
                (<Component {...props} />)}
        />


    );
}

export default PublicAdminRoutes;