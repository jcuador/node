import express from 'express'
import { createFood, createUser, getAllFoods, getAllUsers, getDaily, getDailyUser, getFood, getSpecificFood, getUser, loginUser, removeFood, removeUser, updateFood, updateFoodv2, updateFoodv3, updateUser } from '../controllers/Controller.js'
const router = express.Router()

//apartado usuarios
router.get('/login', getAllUsers);
router.get('/login/:Usuario', getUser);
router.post('/login', createUser);
router.post('/login/:Usuario', loginUser);
router.delete('/login/:Usuario', removeUser);
router.put('/profile/:Usuario', updateUser)

//apartado comidas
router.get('/', getAllFoods);
router.get('/:User', getFood);
router.post('/', createFood);
router.put('/:id', updateFood);
router.put('/:User/:Day/:Food', updateFoodv3);
router.delete('/:User', removeFood);
router.get('/daily/:Day', getDaily);
router.get('/:Day/:User', getDailyUser);
router.get('/:User/:Day/:Food', getSpecificFood);

export default router;