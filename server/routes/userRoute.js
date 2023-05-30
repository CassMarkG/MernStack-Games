import express from "express";
import {createUser,getUser,loginUser,deleteUser, updateUser} from "../controllers/userController.js";
import {protect} from "../middleware/authMiddleware.js";

const router = express.Router();

router.get('/me',getUser);
router.post('/',createUser);
router.post('/login',loginUser);
router.delete('/delete',deleteUser);
router.put('/update',updateUser);

export default router;