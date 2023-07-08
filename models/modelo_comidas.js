//importamos conexion base de datos
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

//modelo tabla comidas
const Model = db.define('comidas', {
    User: {type: DataTypes.STRING},
    Day: {type: DataTypes.DATE},
    Food: {type: DataTypes.INTEGER},
    Turn: {type: DataTypes.INTEGER}
})

export default Model;