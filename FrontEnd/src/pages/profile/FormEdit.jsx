import data from '../../styles/data_profile.css'
import { useForm } from "react-hook-form";
import { useContext,useEffect } from 'react';
import ProfileContext from '../../context/ProfileContext';
import { updateProfile} from '../../api/profile.api';
import { useNavigate } from 'react-router-dom';

const FormEdit = () => {
    const { register,setValue, handleSubmit } = useForm();
    
    let { profile } = useContext(ProfileContext)

    const navigate = useNavigate()
    useEffect(() => {
        setValue('username',profile.username)
        setValue('email',profile.email)
        setValue('direction',profile.direccion)
        setValue('dni',profile.dni)
        setValue('phone',profile.telefono)

    })
    
    const FormSubmit = handleSubmit(async data => {

        await updateProfile(profile.id,{
            username: data.username,
            email: data.email,
            dni:data.dni,
            telefono:data.phone,
            direccion: data.direction,

        })

        navigate("/profile/my-data")

    }) 
    return (
        <div>
            <form onSubmit={FormSubmit}>
                <div className="container">
                <h1 className="my-data-title">Mis datos</h1>
            </div>
                <div className="data-content">
                    <div className="user-data">
                        <div className="log">
                            <p>A</p>
                        </div>
                        <p className="field">Nombre</p>
                        <input className="content input" 
                        {...register("username", { required: true })}/>
                    </div>
                    <div className="user-data">
                        <div className="log">
                            <p>A</p>
                        </div>
                        <p className="field">E-mail</p>
                        <input className="content input"
                        {...register("email", { required: true })}/>

                    </div>
                    <div className="user-data">
                        <div className="log">
                            <p>A</p>
                        </div>
                        <p className="field">Direccion</p>
                        <input className="content input"
                        {...register("direction", { required: false })}/>

                    </div>
                    <div className="user-data">
                        <div className="log">
                            <p>A</p>
                        </div>
                        <p className="field">DNI</p>
                        <input className="content input"
                        {...register("dni", { required: false })}/>

                    </div>
                    <div className="user-data">
                        <div className="log">
                            <p>A</p>
                        </div>
                        <p className="field">Teléfono</p>
                        <input className="content input"
                        {...register("phone", { required: false })}/>

                    </div>
                    <div className="user-data">
                        <input value="Guardar Cambios" type="submit" className="content submit" ></input>
                    </div>

            </div>
            </form>
        </div>
    )
}

export default FormEdit