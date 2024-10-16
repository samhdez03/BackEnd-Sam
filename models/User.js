import { Schema, model } from "mongoose";  

// 1. definimos la coleccion
let collection = 'users'
// 2. definimos un esquema, recibe un objeto
let schema = new Schema({
    name: {type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    photo:{type:String, required:true},
    role:{type:Number, required:true},

}, {
    timestamps: true, //es un dato que guarda la fecha de creacion o update
})

let User = model(collection, schema)

export default User