import User from "../../models/User.js";

//importamos la funcion que tenemos dentro del router y lo guardamos en una funcion
let allUser = async (req, res) => { //peticion tipo request
    try {
        let all = await User.find()   //usamos nuestro modelo
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        return res.status(500).json({
            response: error
        })
    }
   
} 

let userByRole = async (req, res) => { //peticion tipo request
    try {
        console.log(req.params.role)
        let roleQuery = req.params.x //agregamos esto para usar en el filtro
        let all = await User.find({role:roleQuery})   //usamos nuestro modelo
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        return res.status(500).json({
            response: error
        })
    }
   
} 
export  {allUser, userByRole}