import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>

            <div className='navbar_logo'>
                <h1>Logo</h1>
            </div>
            <ul className='navbar_link'>
            <Link class="link-navbar" to="/">Inicio</Link>
            <Link class="link-navbar" to="/cards">Tarjetas</Link>
            <Link class="link-navbar" to="/profile">Perfil</Link>
            <Link class="link-navbar" to="/actividad">Historial Crediticio</Link>
            <Link class="link-navbar" to="/send-money">Enviar Dinero</Link>

            </ul>

        </nav>
  )
}

export default Navbar