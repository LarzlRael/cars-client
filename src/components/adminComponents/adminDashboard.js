import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { accountsLink } from '../data/CarData';
import LoginContext from '../login/LoginContext';
import AdminProfile from './adminProfile';
import AdminUsers from './adminUsers';
import AdminVentas from './adminVentas';
import ListClient from './clientes/ListClient';


import Vehiculos from './vehiculos/vehiculos';
import VerVehiculos from './vehiculos/verVehiculos';

import noprofilephoto from '../../static/noprofilephoto.webp';

const AdminDashboard = () => {

    const loginContext = useContext(LoginContext);
    const { cerrarSesion, s_autenticado_admin } = loginContext;


    // let { image, name } = s_autenticado_admin;
    return (
        <Router>
            <div className="dashboard">
                <div className="dash">

                    <div className="profile-image">
                        <img className="profile-image-img" src={
                            s_autenticado_admin && s_autenticado_admin.image ? s_autenticado_admin.image : noprofilephoto
                        } alt="" />
                        <h4 className="profile-image-name">{s_autenticado_admin && s_autenticado_admin.name}</h4>
                    </div>
                    <div className="dash-group">
                        {accountsLink.map((item, i) => (
                            <>
                                <span className="title-dash" key={i*33}>
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
