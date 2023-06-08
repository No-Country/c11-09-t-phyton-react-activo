import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../api/profile.api';
import '../styles/logUp.css'
import logUp from '../styles/logUp.css'
import Logo from '../assets/logo.png'

function LogUp() {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const onSubmit = async (data) => {
      let res = await createUser(data);
      if(res.status == 201){
        navigate("/login");
        window.alert('User creado exitosamente')
      }else{
        window.alert('Error al crear el usuario')

      }
      
  };

  return (
    <div className='container'>
        <div className="container-logup">
            <div className="header-lg">
                <img src={Logo} alt="Wowlet logo" className="logo"/>
                <h3 className='help-user'>¿Primera vez que ingresas? </h3>
                <h3 className='message-one'>Crea tu cuenta aqui </h3>
                <Link to='/login' className='message-two'>O ya tienes cuenta? Ingresa aqui </Link>

            </div>
            <div className='logup-form'>
              <form className='formulario' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <input placeholder='Username' className='inputForm' {...register("username")} />
                </div>
                <div className='form-group'>
                    <input placeholder='Email' className='inputForm' {...register("email")} />
                </div>
                <div className='form-group'>
                    <input placeholder='Password' className='inputForm' {...register("password")} />
                </div>

                <button className='logup-button' type="submit">Continuar</button>

                <Link style={{'color':'#A87AF2'}} to='/'><button className='comeback-button'>Volver</button></Link>
                
              </form>
               
            </div>
        </div>
        <div className='container-image-triangulo'>

        </div>
    </div>
)
}

export default LogUp
