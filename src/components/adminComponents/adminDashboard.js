import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import LoginContext from '../login/LoginContext';
import AdminProfile from './adminProfile';
import AdminUsers from './adminUsers';
import AdminVentas from './adminVentas';
import ListClient from './clientes/ListClient';

import "./login-admin-styles.scss"
import Vehiculos from './vehiculos/vehiculos';
import VerVehiculos from './vehiculos/verVehiculos';
const AdminDashboard = () => {

    const loginContext = useContext(LoginContext);
    const { cerrarSesion, s_autenticado_admin } = loginContext;

    const accountsLink = [
        {
            title_group: 'Usuario',
            items: [
                { title: 'Mi cuenta', to: '/admin/profile' },
                { title: 'Cuentas asociadas', to: '/admin/users' },
                { title: 'Cuentas conectadas', to: '/admin/empleado' }]
        },
        {
            title_group: 'Empleados',
            items: [
                { title: 'Registro de Ventas', to: '/admin/ventas' },
                { title: 'Agregar Vehiculos', to: '/admin/vehiculos' },
                { title: 'Ver vehiculos', to: '/admin/vervehiculos' }]
        },
        {
            title_group: 'Clientes',
            items: [
                { title: 'Lista de clientes', to: '/admin/clientes' },
            ]
        },
    ];

    // let { image, name } = s_autenticado_admin;
    return (
        <Router>
            <div className="dashboard">
                <div className="dash">

                    <div className="profile-image">
                        <img className="profile-image-img" src={
                            s_autenticado_admin && s_autenticado_admin.image ? s_autenticado_admin.image : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                        } alt="" />
                        <h4 className="profile-image-name">{s_autenticado_admin ? s_autenticado_admin.name : null}</h4>
                    </div>
                    <div className="dash-group">
                        {accountsLink.map((item, i) => (
                            <>
                                <span className="title-dash" key={i}>
                                    {item.title_group}
                                </span>

                                {item.items.map((link, i) => (
                                    <NavLink
                                        key={i}
                                        activeClassName="active"
                                        item className="dash-item"
                                        to={link.to}>{link.title}
                                    </NavLink>
                                ))}
                            </>
                        ))}
                    </div>
                    {/* 
                    <span className="title-dash">
                        Empleados
                    </span>

                    <div className="dash-group">
                        {employeeLink.map((item) => (
                            <NavLink activeClassName="active" className="dash-item" to={item.to}>{item.title}</NavLink>
                        ))}
                    </div> */}


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
                        <Route path="/admin/clientes" component={ListClient} />

                        <Route path="/admin/vervehiculos" component={VerVehiculos} />
                        
                        <Route path="/admin/ventas" component={AdminVentas} />
                        
                        <Switch>
                            <Route path="/admin/vehiculos" component={Vehiculos} />
                            <Route path="/admin/vehiculos/:id" component={VerVehiculos} />
                        </Switch>


                    </Switch>


                </div>
            </div>
        </Router>

    )
}

export default AdminDashboard;
