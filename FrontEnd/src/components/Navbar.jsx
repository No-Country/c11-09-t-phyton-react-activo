import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>

            <div className='navbar_logo'>
                <h1>Logo</h1>
            </div>
            <ul className='navbar_link'>
            <Link to="/">Inicio</Link>
            <Link to="/cards">Tarjetas</Link>
            <Link to="/profile">Perfil</Link>
            <Link to="/actividad">Historial Crediticio</Link>
            <Link to="/send-money">Enviar Dinero</Link>

            </ul>

        </nav>
  )
}

export default Navbar