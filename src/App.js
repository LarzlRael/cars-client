import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';

import Header from './components/Header';
import Layout from './components/Layout';
import Cars from './components/cars';
import CarState from './components/cars/carState';
import Car_info from './components/car-info';
import LoginState from './components/login/loginState';
import AdminLogin from './components/adminComponents/AdminLogin';
import AdminDashboard from './components/adminComponents/adminDashboard';

//? rutas para proteger
//import RutaUserPrivada from './private_rutes/PrivateUserRoutes';

import tokenAuth from './config/token_auth';

import CustomerState from './components/adminComponents/users_context/customerState';
import Login from './components/login';
import Register from './components/register';
import { CARS, INICIO, LOGIN, REGISTER } from './routes/routes';
import PayCar from './components/PayCar';
import PrivateUserRoutes from './routes_user/private_routes/PrivateUserRoutes';
import PrivateAdminRoutes from './routes_user/private_routes/PrivateAdminRoutes';
import PublicRoutes from './routes_user/public_routes/PublicRoutes';
import PublicAdminRoutes from './routes_user/public_routes/PublicAdminRoutes';


const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

let location = window.location.pathname;


function App() {
  return (
    <LoginState>
      <CustomerState>
        <CarState>
          <div className="App">
            <Router>

              {!location.includes('/admin') && <Header />}
              

              <Route exact path='/'   >
                <Redirect to={INICIO} />
              </Route>


              <PublicRoutes path={INICIO} component={Layout} />
              <Route path={INICIO} component={Layout} />

              <Switch>
                <Route path="/cars/:id" component={Car_info} />
                <Route path={CARS} component={Cars} />
              </Switch>

              <Route path={LOGIN} component={Login} />
              <Route path={REGISTER} component={Register} />

              {/* //? Admin Routes */}
              <Switch>
                {/* <Route path="/admin/dashboard" component={AdminDashboard} />
              <Route path="/admin/users" exact component={AdminLogin} /> */}

                <PrivateAdminRoutes path="/admin/dashboard" component={AdminDashboard} />
                <PrivateAdminRoutes path="/admin/users" component={AdminDashboard} />
                <PrivateAdminRoutes path="/admin/profile" component={AdminDashboard} />
                <PrivateAdminRoutes path="/admin/clientes" component={AdminDashboard} />
                <PrivateAdminRoutes path="/admin/vehiculos" component={AdminDashboard} />
                <PrivateAdminRoutes path="/admin/vervehiculos" component={AdminDashboard} />
                <PrivateAdminRoutes path="/admin/ventas" component={AdminDashboard} />

                <PrivateUserRoutes path="/proyects" component={Layout} />
                <PrivateUserRoutes path="/payment-method" component={PayCar} />


                <PublicAdminRoutes path="/admin" component={AdminLogin} />

                <Route path="/loginadmin/new-car" component={AdminLogin} />

                {/* <Redirect to="/" /> */}
                
              </Switch>


            </Router>
          </div>
        </CarState>
      </CustomerState>
    </LoginState>
  );
}

export default App;
