import React from 'react'

import { Link } from 'react-router-dom';
import Footer from './Footer';
import SliderImage from './SliderImage';

import { LOGIN } from '../routes/routes';

const Layout = () => {
    return (
        <>
            <div className="layout">

                <div className="info animate__animated animate__fadeInLeft">
                    <div className="subtitle ">
                        GROW YOUR CAR WASH
                        <br />
                        BUSINESS WITH
                    </div>
                    <div className=" fresh">
                        <h1>Fresh</h1>
                    </div>
                    <div className="desc ">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde neque blanditiis consectetur ex tenetur accusantium debitis voluptatibus, sunt sequi eum facilis dignissimos rerum doloremque veritatis fugiat illo molestiae error!
                        </p>
                        <Link to={LOGIN} className="button animate__animated animate__fadeIn">Login</Link>
                    </div>





                    {/* <Link to="/register" className="button">Register</Link> */}

                </div>

                <SliderImage />


            </div>

            <Footer />

        </>
    )
}

export default Layout