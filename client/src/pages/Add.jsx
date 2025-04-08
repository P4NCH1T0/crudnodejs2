import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Add() {

    const [empleado,setEmpleado]=useState({
        nombre:"",
        job:"",
        shift:"",
        experience:"",
    });

    const navigate = useNavigate()

    const handleChange=(e) =>{
        setEmpleado(prev=>({...prev, [e.target.name]:e.target.value}));
    };


    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:9900/empleado", empleado)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className='form'>
      <h1>Nuevo empleado</h1>
      <input type="text" placeholder='Nombre' onChange={handleChange} name='nombre'/>
      <input type="text" placeholder='Puesto' onChange={handleChange} name='job'/>
      <input type="text" placeholder='Turno' onChange={handleChange} name='shift'/>
      <input type="number" placeholder='Experiencia' onChange={handleChange} name='experience'/>
      <button onClick={handleClick}>Crear</button>
    </div>
  )
}

export default Add
