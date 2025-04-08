import express from "express";
import mysql from "mysql2";
import cors from "cors"

const  app = express()

// Coneccion con la base de datos

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"fran2305",
    database:"crud2"

})

app.use(express.json())
app.use(cors())

app.get("/" ,(req,res)=>{
    res.json("this is the server")
})

// Mostrar empleados

app.get("/empleado",(req,res)=>{
    const q = "SELECT * from empleado"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})

// Crear empleado

app.post("/empleado",(req,res)=>{
    const q = "INSERT INTO empleado (`nombre`,`job`,`shift`,`experience`) VALUES (?)"
    const values =[
        req.body.nombre,
        req.body.job,
        req.body.shift,
        req.body.experience,
    ];

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err);
        return res.json("Employe created sucesfully");
    })
})

// Borrar empleado

app.delete("/empleado/:id", (req,res)=>{
    const empleadoId = req.params.id
    const q = "DELETE FROM empleado WHERE id = ?"

    db.query(q,[empleadoId], (err, data)=>{
        if(err) return res.json(err)
            return res.json("empleado has been deleted")
    });
})

// Actualizar empleado

app.put("/empleado/:id", (req,res)=>{
    const empleadoId = req.params.id
    const q = "UPDATE empleado SET `nombre` = ?, `job` = ?, `shift` =?, `experience` =? WHERE id = ?"

    const values = [
        req.body.nombre,
        req.body.job,
        req.body.shift,
        req.body.experience
    ];

    db.query(q,[...values, empleadoId], (err, data)=>{
        if(err) return res.json(err)
            return res.json("empleado has been updated")
    });
})

app.listen(9900, ()=>{
    console.log("Conected to the server")
})

