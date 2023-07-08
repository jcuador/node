import {Sequelize} from 'sequelize'

//Objeto para manejar la base de datos
const db = new Sequelize('tfg', 'admin', 'masterkey', {
    host: 'tfg2.cwrzlzvqxnns.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
})

export default db