import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProfileContext from '../../context/ProfileContext'
import profile_styles from '../../styles/profile.css'
import profile_styles_helper from '../../styles/profile_repeats_helper.css'

const Profile = () => {
    const { profile } = useContext(ProfileContext)
   return (
    <>
        <div className='profile-data'>   
                <div className='container-profile'>
                    <div className='data'>
                        <div className='logo'></div>
                        <h1 className='name'>{profile.username}</h1>
                    </div>
                </div>

                <div className='container-data'>
                    <div className='data'>
                        <div className='logo'>
                            <p>A</p>
                        </div>
                        <p className='name'><Link to="my-data">Mis Datos</Link></p>
                    </div>
                </div>

                <div className='container-security'>
                    <div className='data'>
                        <div className='logo'>
                            <p>A</p>
                        </div>
                        <p className='name'><Link to="card">Tu targeta de credito</Link></p>

                    </div>
                </div>
               
            </div>
            
    </>
    

  )
}

export default Profile