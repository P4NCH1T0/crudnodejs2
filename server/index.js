import express from "express";
import mysql from "mysql2";

const  app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"fran2305",
    database:"crud2"

})

app.get("/" ,(req,res)=>{
    res.json("this is the server")
})

app.get("/empleado",(req,res)=>{
    const q = "SELECT * from empleado"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})

app.post("/empleado",(req,res)=>{
    const q = "INSERT INTO empleado (`nombre`,`job`,`shift`,`experience`) VALUES (?)"
    const values =[
        "Leo",
        "3D Modeler",
        "Matutino",
        "2"
    ];

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err);
        return res.json("Employe created sucesfully");
    })
})

app.listen(9900, ()=>{
    console.log("Conected to the server")
})

