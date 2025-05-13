import { getAllUsers, login, register, deleteUser, updateUser }    from "../controllers/user.controller.js";
import { Router } from "express";
import { auth, authAdmin } from "../middlewares/auth.middleware.js";

const router = Router();

// get all
router.get('/',auth, authAdmin, getAllUsers);

// get by id
router.post('/', register);

// add
router.post('/login', login);

// update
router.put('/:id', auth, updateUser);

// delete
router.delete('/:id',auth, deleteUser);

export default router;