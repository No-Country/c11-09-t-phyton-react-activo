import React, { useState } from 'react'
import prueba from '../Api-de-prueba/prueba'

const Logeed = () => {
    

  return (
    <>
    <div>   
    {prueba.map(index => (
        <div>
            <p>{index?.nombre}</p>
             <p>{index?.ciudad}</p>
        <p>{index?.edad}</p>
        </div>
       
    ))}
    </div>
    </>
    
  )
}

export default Logeed