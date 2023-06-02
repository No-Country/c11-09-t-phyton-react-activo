import React,{useContext, useReducer} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext';
import ProfileContext from '../context/ProfileContext';

import '../styles/navbar.css';

const Navbar = () => {
  let {logoutUser,user} = useContext(AuthContext);
  let {profile} = useContext(ProfileContext);

  return (  
    <nav className='navbar'>

            <div className='navbar_logo'>
                <div className='logo logo1'>logo</div>
            </div>
            { user ? <ul className='navbar_link'>
            <Link className="link-navbar" to="/">Inicio</Link>
            <Link className="link-navbar" to="/cards">Tarjetas</Link>
            <Link className="link-navbar" to="/actividad">Historial Crediticio</Link>
            <Link className="link-navbar" to="/send-money">Enviar Dinero</Link>
            <Link className="link-navbar" to="/profile">{profile.username }</Link>
            <Link className="link-navbar" onClick={logoutUser}>Logout</Link>

            </ul> : 
             
            <ul className='navbar_link'>
            <Link className="link-navbar" to="/">Inicio</Link>
            <Link className="link-navbar" to="/login">Login</Link>
            <Link className="link-navbar" to="/logup">Logup</Link>

            </ul> 
            }
           
            
            
        </nav>
  )
}

export default Navbar