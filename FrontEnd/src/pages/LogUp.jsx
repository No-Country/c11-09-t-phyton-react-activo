import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/logUp.css'

function LogUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (

    <>
    <div className='container-form'>

    <h2 className='create-title'>
      ¿Primera vez que ingresas?
    </h2>
    <p className='create-p'>Crea tu cuenta aqui:</p>
    <form className='formulario' onSubmit={handleSubmit(onSubmit)}>
        <label className='label' >Nombre y Apellido</label>
      <input className='inputForm' {...register("firstName")} />
      {errors.firstName && <span>This field is required</span>}
      <label className='label' >Mail</label>
      <input className='inputForm' {...register("email")} />
      {errors.lastName && <span>This field is required</span>}
      <label className='label' >Contraseña</label>
      <input className='inputForm' {...register("password")} />
      {errors.lastName && <span>This field is required</span>}
      <button className='buttonForm button1' type="submit">continuar</button>
      <button className='buttonForm button2'  >Volver</button>
    </form>
    </div>
    </>
  );
}

export default LogUp