import mongoose from "mongoose";

let url = process.env.URI_MONGO

console.log("la url es: ", url)
/* primera forma de conectar */
/* mongoose.connect(url)
.then(()=> console.log("base de datos conectada"))
.catch(err=> console.log(err)) */

/* segunda forma de conectar */
async function conexionBD (){
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("Base de datos conectada")
    } catch (error){
        console.log(error)
    }
}

conexionBD ()