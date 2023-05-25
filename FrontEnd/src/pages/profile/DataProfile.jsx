import data from '../../styles/data_profile.css'
import  AuthContext  from '../../context/AuthContext'
import React,{ useContext } from 'react'

const DataProfile = () => {
    let { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div className="container">
            <h1 className="my-data-title">Mis datos</h1>
            <div className="edit-logo">
            <i className="fa-solid fa-pen-fancy icon"></i>         
            <p>editar</p>
            </div>
            <div className="data-content">
                <div className="user-data">
                    <div className="log">
                        <p>A</p>
                    </div>
                    <p className="field">Usuario</p>
                    <p className="content">{user.username}</p>

                </div>
                <div className="user-data">
                    <div className="log">
                        <p>A</p>
                    </div>
                    <p className="field">E-mail</p>
                    <p className="content">{user.email}</p>

                </div>
                <div className="user-data">
                    <div className="log">
                        <p>A</p>
                    </div>
                    <p className="field">Direccion</p>
                    <p className="content">Scalabrini 2456</p>

                </div>
                <div className="user-data">
                    <div className="log">
                        <p>A</p>
                    </div>
                    <p className="field">DNI</p>
                    <p className="content">25.679.642</p>

                </div>
                <div className="user-data">
                    <div className="log">
                        <p>A</p>
                    </div>
                    <p className="field">Teléfono</p>
                    <p className="content">1158796430</p>

                </div>
            </div>
        </div>
    )
}

export default DataProfile;