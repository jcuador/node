//importamos el modelo
import Sequelize from "sequelize";
import Moment from 'moment';
import Model from "../models/modelo_comidas.js";
import ModelUser from "../models/modelo_usuarios.js";

//métodos para el CRUD

/**MODELO USUARIOS*/

//mostrar todos los usuarios
export const getAllUsers = async(req, res) => {
    try {
        const foods = await ModelUser.findAll();
        res.json(foods);
    } catch (error) {
        res.json({message: error.message})
    }
}

//mostrar un usuario
export const getUser = async(req, res) =>  {
    try {
        const usuario = await ModelUser.findAll({
            where: {Usuario:req.params.Usuario}
        })
        res.json(usuario);
    } catch (error) {
        res.json({message: error.message})
    }
}

//crear un usuario
export const createUser = async(req, res) => {
    try {
        await ModelUser.create(req.body);
        res.json({
            "message":"Usuario creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//actualizar un usuario
export const updateUser = async(req, res) => {
    try {
        await ModelUser.update(req.body, {
            where:{
                Usuario: req.params.Usuario,
            }
        })
        res.json({
            "message":"Usuario actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//eliminar un usuario
export const removeUser = async(req, res) => {
    try {
        ModelUser.destroy({
            where: {
                Usuario: req.params.Usuario
            }
        })
        res.json({
            "message":"Usuario eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//login de un usuario
export const loginUser = async(req, res) => {
    try {
        const usuario = await ModelUser.findAll({
            where: {Usuario:req.body.Usuario, Contraseña:req.body.Contraseña}
        })
        res.json(usuario);
    } catch (error) {
        res.json({message: error.message})
    }
}





/**MODELO COMIDAS**/

//mostrar todas las comidas
export const getAllFoods = async (req, res) => {
    try {
        const foods = await Model.findAll();
        res.json(foods);
    } catch (error) {
        res.json({message: error.message})
    }
}

//mostrar una comida
export const getFood = async (req, res) => {
    try {
        const food = await Model.findAll({
            where: {User:req.params.User}
        })
        res.json(food);
    } catch (error) {
        res.json({message: error.message})
    }
}
//mostrar todas las comidas de un día
export const getDaily = async (req, res) => {
    try {
        const food = await Model.findAll({
            where: {
                Day: Moment(req.params.Day)
            }
        })
        console.log("Funciona");
        res.json(food);
        console.log(req.params.Day);
    } catch (error) {
        res.json({message: error.message})
    }
}

//mostrar todas las comidas de un día para un usuario
export const getDailyUser = async (req, res) => {
    try {
        const food = await Model.findAll({
            where: {
                Day: Moment(req.params.Day),
                User: req.params.User
            }
        })
        console.log("Funciona");
        res.json(food);
        console.log(req.params.Day);
    } catch (error) {
        res.json({message: error.message})
    }
}

//mostrar si una comida específica ya existe o no
export const getSpecificFood = async (req, res) => {
    try {
        const food = await Model.findAll({
            where: {
                User: req.params.User,
                Day: Moment(req.params.Day),
                Food: req.params.Food
            }
        })
        res.json(food);
    } catch (error) {
        res.json({"message": "No hay comida"});
    }
}

//crear una comida
export const createFood = async (req, res) => {
    try {
        await Model.create(req.body);
        res.json({
            "message":"Comida creada correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//actualizar una comida
export const updateFood = async (req, res) => {
    try {
        await Model.update(req.body, {
            where:{
                id: req.params.id
            }
        })
        res.json({
            "message":"Comida actualizada correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//actualizar una comida v2
export const updateFoodv2 = async (req, res) => {
    try {
        await Model.update(req.body, {
            where:{
                User: req.params.User,
                Day: Moment(req.params.Day),
                Food: req.params.Food
            }
        })
        res.json({
            "message":"Comida actualizada correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//actualizar una comida v3
export const updateFoodv3 = async (req, res) => {
    try {
        const food = await Model.findAll({
            where: {
                User: req.params.User,
                Day: Moment(req.params.Day),
                Food: req.params.Food
            }
        })
        if(food.length == 0) {await Model.create(req.body);}
        else {
        await Model.update(req.body, {
            where:{
                User: req.params.User,
                Day: Moment(req.params.Day),
                Food: req.params.Food
            }
        })}
        
        res.json({
            "message":"Comida actualizada correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//eliminar una comida
export const removeFood = async (req, res) => {
    try {
        Model.destroy({
            where: {
                User: req.params.User
            }
        })
        res.json({
            "message":"Comida eliminada correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}