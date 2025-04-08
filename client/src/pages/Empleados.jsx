import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

function Empleados() {
    const [empleados, setEmpleados] = useState([])

    useEffect(()=>{
        const fetchAllEmpleados = async()=>{
            try{
                const res = await axios.get("http://localhost:9900/empleado")
                setEmpleados(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchAllEmpleados()
    },[])

    return (
    <div>
      <h1>Empleados Caja de Errores</h1>
      <div className="container">
        {empleados.map(empleado=>(
            <div className="empleado" key={empleado.id}>
                <h3>{empleado.nombre}</h3>
                <h3>{empleado.job}</h3>
                <h3>{empleado.shift}</h3>
                <h3>{empleado.experience}</h3>
            </div>
        ))}
      </div>
      <button><Link to={"/add"}>Nuevo empleado</Link></button>
    </div>
  )
}

export default Empleados
