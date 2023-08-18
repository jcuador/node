import express from 'express';
import cors from 'cors';
//importamos conexion a db
import db from './database/db.js';
//importamos rutas
import router from './routes/routes.js';

//Crea un objeto express
const app = express();

//Añade las capas middleware
app.use(cors())
app.use(express.json())
app.use('/comidas', router)
app.use('/.netlify/functions/api', router)
app.use(function(req, response, next) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
})

//Realiza la conexion con la base de datos
try {
    db.authenticate()
    console.log("Conexión correcta con la DB");
} catch (error) {
    console.log('Error en la conexión: ${error}');
}

//Para dicha ruta ante un GET envía una respuesta
app.get('/', (req, res) => {
    res.send("Hola Mundo")
})

//El servidor esccuha en el puerto 8081 las peticiones
app.listen(8081, () => {
    console.log("Server running in port 8001")
})