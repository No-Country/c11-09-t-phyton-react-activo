import data from '../../styles/data_profile.css'
import  AuthContext  from '../../context/AuthContext'
import React,{ useContext } from 'react'
import ProfileContext from '../../context/ProfileContext'
import { useNavigate } from 'react-router-dom'

const DataProfile = () => {
    let { profile } = useContext(ProfileContext)
    const navigate = useNavigate()
    const handleUpdate = () => {
        navigate("/profile/my-data/update")
    }
    return (
        <div>
            <div className="container">
                <h1 className="my-data-title">Mis datos</h1>
                
                <div className="edit-logo" onClick={handleUpdate}>
                    <i className="fa-solid fa-pen-fancy icon"></i>         
                    <p >editar</p> 
                </div>
            </div>
                <div className="data-content">
                    <div className="user-data">
                        <div className="log">
                            <p>A</p>
                        </div>
                        <p className="field">Nombre</p>
                        <p className="content">{profile.username}</p>

                    </div>
                    <div className="user-data">
                        <div className="log">
                            <p>A</p>
                        </div>
                        <p className="field">E-mail</p>
                        <p className="content">{profile.email }</p>

                    </div>
                    <div className="user-data">
                        <div className="log">
                            <p>A</p>
                        </div>
                        <p className="field">Direccion</p>
                        <p className="content">{profile.direccion || "Ninguno"}</p>

                    </div>
                    <div className="user-data">
                        <div className="log">
                            <p>A</p>
                        </div>
                        <p className="field">DNI</p>
                        <p className="content">{profile.dni || "Ninguno"}</p>

                    </div>
                    <div className="user-data">
                        <div className="log">
                            <p>A</p>
                        </div>
                        <p className="field">Teléfono</p>
                        <p className="content">{profile.telefono || "Ninguno"}</p>

                    </div>
                </div>

            </div>
                    
    )
}

export default DataProfile;