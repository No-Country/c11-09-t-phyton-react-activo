import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import profile_styles from '../../styles/profile.css'
import profile_styles_helper from '../../styles/profile_repeats_helper.css'
import  AuthContext  from '../../context/AuthContext'

const Profile = () => {
    let { user } = useContext(AuthContext)
    
  return (
    <>
        <div className='profile-data'>   
                <div className='container-profile'>
                    <div className='data'>
                        <div className='logo'></div>
                        <h1 className='name'>{user.username}</h1>
                    </div>
                </div>

                <div className='container-data'>
                    <div className='data'>
                        <div className='logo'>
                            <p>A</p>
                        </div>
                        <p className='name'><Link to="my-data">Mis Datos</Link></p>
                        <p className='description'>basicos asociados</p>
                    </div>
                </div>

                <div className='container-security'>
                    <div className='data'>
                        <div className='logo'>
                            <p>A</p>
                        </div>
                        <p className='name'><Link to="security">Seguridad</Link></p>
                        <p className='description'>de la cuenta</p>

                    </div>
                </div>
                <div className='container-directions'>
                    <div className='data'>
                        <div className='logo'>
                            <p>A</p>
                        </div>
                        <p className='name'>Direciones</p>
                        <p className='description'>asociadas a tu cuenta</p>

                    </div>
                </div>

                <div className='container-communications'>
                    <div className='data'>
                        <div className='logo'>
                            <p>A</p>
                        </div>
                        <p className='name'>Direciones</p>
                        <p className='description'>asociadas a tu cuenta</p>

                    </div>
                </div>
            </div>
            
    </>
    

  )
}

export default Profile