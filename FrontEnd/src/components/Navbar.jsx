import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css';

const Navbar = () => {

  const [bars, setBars] = useState(false)
  const [dep, setDep] = useState(false)
    
  return (
    <nav className='navbar'>

            <div className='navbar_logo'>
                <div className='logo logo1'>logo</div>
            </div>
            <button className="botton-bars" onClick={() => {setBars(!bars); setDep(!dep);}}><i className="fa-solid fa-bars"></i></button>
            <span className={`navbar_link  ${bars ? "ocultar": ""} ${dep ? "dep" : ""} `}>
            <Link className='nav-link' to="/">Inicio</Link>
            <Link className='nav-link' to="/logIn">LogIn</Link>
            <Link className='nav-link' to="/logeed">Logeed</Link>
            <Link className='nav-link' to="/cards">Tarjetas</Link>
            <Link className='nav-link' to="/profile">Perfil</Link>
            <Link className='nav-link' to="/actividad">Historial</Link>
            <Link className='nav-link' to="/send-money">Enviar Dinero</Link>

            </span>
            
        </nav>
  )
}

export default Navbar