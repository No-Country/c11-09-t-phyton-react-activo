import React,{ useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    let {loginUser} = useContext(AuthContext)
    const navigate = useNavigate()
    return (
        <form onSubmit={loginUser}>
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password"/>

            <input type="submit" value="Login"/>
            
        </form>
    )
}

export default LogIn;