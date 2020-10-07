import React, { useContext } from 'react'
import {  BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import LoginContext from '../login/LoginContext';
import AdminProfile from './adminProfile';
import AdminUsers from './adminUsers';
import ListClient from './clientes/ListClient';

import "./login-admin-styles.scss"
const AdminDashboard = () => {
    const loginContext = useContext(LoginContext);
    const {  cerrarSesion } = loginContext;


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
                { title: 'Empleados', to: '/admin/profilexd' },
                { title: 'Empleados y vehiculos', to: '/admin/otro' },
                { title: 'Editar', to: '/admin/xd' }]
        },
        {
            title_group: 'Clientes',
            items: [
                { title: 'Lista de clientes', to: '/admin/clientes' },
                ]
        },
    ];

    let admin = JSON.parse(localStorage.getItem('admin'));
    console.log(admin)
    return (
        <Router>
            <div className="dashboard">
                <div className="dash">

                    <div className="profile-image">
                        <img className="profile-image-img" src={
                            admin.image ? admin.image : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                        } alt="" />
                        <h4 className="profile-image-name">{admin.name}</h4>
                    </div>
                    <div className="dash-group">
                        {accountsLink.map((item) => (
                            <>
                                <span className="title-dash">
                                    {item.title_group}
                                </span>

                                {item.items.map(link => (
                                    <NavLink activeClassName="active" item className="dash-item" to={link.to}>{link.title}</NavLink>
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

                    </Switch>


                </div>
            </div>
        </Router>

    )
}

export default AdminDashboard;
