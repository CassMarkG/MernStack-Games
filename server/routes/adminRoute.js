import express from "express";
import {createAdmin,getAdmin,loginAdmin,deleteAdmin, updateAdmin} from "../controllers/adminController.js";

const router = express.Router();

router.get('/me',getAdmin);
router.post('/',createAdmin);
router.post('/login',loginAdmin);
router.delete('/delete',deleteAdmin);
router.put('/update',updateAdmin);

export default router;