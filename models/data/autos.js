// 1. 
import "dotenv/config.js"; //conexion a la base de datos
// 2. configuracion para la conexion a la BD
import '../../config/database.js'
// 3. importamos el modelo de la base de datos
import Auto from '../Auto.js'

let autos = [
    {
      marca: "Toyota",
      modelo: "Corolla"
    },
    {
      marca: "Honda",
      modelo: "Civic"
    },
    {
      marca: "Ford",
      modelo: "Mustang"
    },
    {
      marca: "Chevrolet",
      modelo: "Camaro"
    },
    {
      marca: "BMW",
      modelo: "3 Series"
    },
    {
      marca: "Mercedes-Benz",
      modelo: "C-Class"
    },
    {
      marca: "Audi",
      modelo: "A4"
    },
    {
      marca: "Volkswagen",
      modelo: "Golf"
    },
    {
      marca: "Nissan",
      modelo: "Altima"
    },
    {
      marca: "Hyundai",
      modelo: "Elantra"
    }
  ];

  //ejecutamos la funcion de mongoose de insert many
  Auto.insertMany(autos)