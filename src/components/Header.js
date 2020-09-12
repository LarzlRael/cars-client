import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/" className="logo-link">Logo</Link>

            </div>
            <div className="links">
                <Link to="/" className="link">Home</Link>
                <Link to="/cars" className="link">Ver automoviles</Link>
                <a href="#" className="link">About us</a>
                <a href="#" className="link">Precios</a>
                <Link to="/login" className="link">Iniciar sesion</Link>
            </div>
        </header>
    )
}

export default Header
