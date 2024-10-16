import { Schema, model } from "mongoose";  

// 1. definimos la coleccion
let collection = 'autos'
// 2. definimos un esquema, recibe un objeto

let schema = new Schema({
    marca: {type:String, required:true},
    modelo:{type:String, required:true}

}, {
    timestamps: true, //es un dato que guarda la fecha de creacion o update
})

//creamos el modelo y lo exportamos
let Auto = model(collection, schema)

export default Auto