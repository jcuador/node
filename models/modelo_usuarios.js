//importamos conexion base de datos
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

//modelo tabla usuarios
const ModelUser = db.define('usuarios', {
    Usuario: {type: DataTypes.STRING},
    Contraseña: {type: DataTypes.STRING},
    Email: {type: DataTypes.INTEGER},
    Nombre: {type: DataTypes.INTEGER},
    Habitación: {type: DataTypes.INTEGER},
    Régimen: {type: DataTypes.INTEGER}
})

export default ModelUser;