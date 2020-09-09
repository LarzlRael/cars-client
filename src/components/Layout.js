import React from 'react'
import './styles/layout.scss';
import Footer from './Footer';

const Layout = () => {
    return (
        <>
            <div>
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
                    <button class="button">Try for Free</button>
                </div>

                <img src="" alt="" />

            </div>
            
            <Footer />

        </>
    )
}

export default Layout