import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Update() {
    const [empleado,setEmpleado]=useState({
        nombre:"",
        job:"",
        shift:"",
        experience:"",
    });

    const navigate = useNavigate()
    const location = useLocation()

    const empleadoId = location.pathname.split("/")[2]

    const handleChange=(e) =>{
        setEmpleado(prev=>({...prev, [e.target.name]:e.target.value}));
    };


    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:9900/empleado/" + empleadoId, empleado)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className='form'>
      <h1>Editar empleado</h1>
      <input type="text" placeholder='Nombre' onChange={handleChange} name='nombre'/>
      <input type="text" placeholder='Puesto' onChange={handleChange} name='job'/>
      <input type="text" placeholder='Turno' onChange={handleChange} name='shift'/>
      <input type="number" placeholder='Experiencia' onChange={handleChange} name='experience'/>
      <button onClick={handleClick}>Editar</button>
    </div>
  )
}

export default Update
