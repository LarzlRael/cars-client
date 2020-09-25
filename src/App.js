import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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


function App() {
  return (
    <LoginState>
      <CarState>
        <div className="App">
          <Router>
            <Header />

            <Route path="/" exact component={Layout} />

            <Switch>
              <Route path="/cars/:id" component={Car_info} />
              <Route path="/cars" component={Cars} />
            </Switch>
            <Route path="/login" component={Layout} />
            <Route path="/register" component={Layout} />
            {/* //? Admin Routes */}
            <Switch>
              <Route path="/admin/dashboard" component={AdminDashboard} />
              <Route path="/admin" component={AdminLogin} />
              <Route path="/loginadmin/users" exact component={AdminLogin} />

              <Route path="/loginadmin/new-car" component={AdminLogin} />
            </Switch>


          </Router>
        </div>
      </CarState>
    </LoginState>
  );
}

export default App;
