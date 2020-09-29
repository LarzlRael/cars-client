import React, { useContext, useEffect } from 'react'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginContext from '../login/LoginContext';
import AdminProfile from './adminProfile';
import AdminUsers from './adminUsers';

import "./login-admin-styles.scss"
const AdminDashboard = (props) => {
    const loginContext = useContext(LoginContext);

    const { cerrarSesion } = loginContext;
    const accountsLink = [
        { title: 'Mi cuenta', to: '/admin/profile' },
        { title: 'Cuentas asociadas', to: '/admin/users' },
        { title: 'Cuentas asociadas', to: '/admin/empleado' },
    ]
    const employeeLink = [
        { title: 'Empleados', to: '/admin/profile' },
        { title: 'Empleados y vehiculos', to: '/admin/users' },
        { title: 'Editar', to: '/admin/empleado' },
    ]
    return (

        <Router>
            <div className="dashboard">
                <div className="dash">
                    <span className="title-dash">
                        Cuentas
                </span>

                    <div className="dash-group">
                        {accountsLink.map((item) => (
                            <Link className="dash-item" to={item.to}>{item.title}</Link>
                        ))}
                    </div>

                    <span className="title-dash">
                        Empleados
                    </span>

                    <div className="dash-group">
                        {employeeLink.map((item) => (
                            <Link className="dash-item" to={item.to}>{item.title}</Link>
                        ))}
                    </div>


                    <span className="title-dash">
                        Empleados
                    </span>

                    <div className="dash-group">
                        <ul className="dash-item">Ver empleados</ul>
                        <ul className="dash-item" >Cuentas asociadas</ul>
                        <ul className="dash-item" onClick={cerrarSesion}>Salir</ul>
                    </div>

                </div>
                <div className="dash-content">

                    <Switch>
                        <Route path="/admin/profile" component={AdminProfile} />
                        <Route path="/admin/users" component={AdminUsers} />
                    </Switch>


                </div>
            </div>
        </Router>

    )
}

export default AdminDashboard;
