import express from "express";
import "dotenv/config.js";

const server = express();
const PORT = process.env.PORT || 8080;
const ready = () => console.log("server ready in port:"+PORT);

server.get('/',(req,res)=>{
    res.send("Hola mundo");
})
server.get('/saludo',(req,res)=>{
    res.send("Hola, bienvenidos al mundo de Express");
})

server.listen(PORT, ready);
