import React,{ useContext } from 'react';
import AuthContext from '../context/AuthContext';
import login from '../styles/login.css'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
const LogIn = () => {
    let {loginUser} = useContext(AuthContext)
    return (
        <div className='container'>
            <div className="container-login">
                <div className="header-lg">
                    <img src={Logo} alt="Wowlet logo" className="logo"/>
                    <h3 className='help-user'>Iniciar sesion en wowlet </h3>
                </div>
                <div className='login-form'>
                    <form  onSubmit={loginUser}>
                            <div className='form-group'>
                                <input type="text" name="username" placeholder="Username"/>
                            </div>
                            <div className='form-group'>
                                <input type="password" name="password" placeholder="Password"/>
                            </div>
                            <div className='form-group'>
                                <button className="login-button" type="submit" value="Login">Continuar</button>
                            </div>
                    </form>
                    <p className='problems'>¿No puedes iniciar sesion? </p>
                    <p className='no-account'>¿No tienes una cuenta?</p>
                    <Link to="/logup" className='create-account'> Crear una cuenta</Link>
                </div>
            </div>
            <div className='container-image'>

            </div>
        </div>
    )
}

export default LogIn;