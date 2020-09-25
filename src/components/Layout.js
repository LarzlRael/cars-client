import React from 'react'
import './styles/layout.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Footer from './Footer';
import Login from './login';
import Register from './register';
import Image from './image';
import AdminLogin from './adminComponents/AdminLogin';

const Layout = () => {
    return (

        <Router>

            <div className="layout">
                <div className="info">
                    <div className="subtitle">
                            GROW YOUR CAR WASH
                        <br />
                        BUSINESS WITH
                    </div>
                    <div className="fresh">
                        <h1>Fresh</h1>
                    </div>
                    <div className="desc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde neque blanditiis consectetur ex tenetur accusantium debitis voluptatibus, sunt sequi eum facilis dignissimos rerum doloremque veritatis fugiat illo molestiae error!
                        </p>
                    </div>
                    <Link to="/login" className="button">Login</Link>
                    


                    {/* <Link to="/register" className="button">Register</Link> */}

                </div>

                <Route path="/" exact component={Image} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                

            </div>

            <Footer />

        </Router>
    )
}

export default Layout