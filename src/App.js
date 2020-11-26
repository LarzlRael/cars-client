import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';

import Header from './components/Header';
import Layout from './components/Layout';
// import Login from './components/login';
// import Register from './components/register';
import Cars from './components/cars';
import CarState from './components/cars/carState';
import Car_info from './components/car-info';
import LoginState from './components/login/loginState';
import AdminLogin from './components/adminComponents/AdminLogin';
import AdminDashboard from './components/adminComponents/adminDashboard';

//? rutas para proteger
//import RutaUserPrivada from './private_rutes/PrivateUserRoutes';
import PrivateAdminRoutes from './private_rutes/PrivateAdminRoutes';


import tokenAuth from './config/token_auth';
import PrivateUserRoutes from './private_rutes/PrivateUserRoutes';
import CustomerState from './components/adminComponents/users_context/customerState';
import Login from './components/login';
import Register from './components/register';
import { CARS, INICIO, LOGIN, REGISTER } from './routes/routes';
import PayCar from './components/PayCar';




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

              {!location.includes('/admin') ? <Header /> : null}

              <Route path='/' exact  >
                <Redirect to={INICIO} />
              </Route>

              <Route path={INICIO} exact component={Layout} />

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


                <Route path="/admin" component={AdminLogin} />

                <Route path="/loginadmin/new-car" component={AdminLogin} />
              </Switch>


            </Router>
          </div>
        </CarState>
      </CustomerState>
    </LoginState>
  );
}

export default App;
