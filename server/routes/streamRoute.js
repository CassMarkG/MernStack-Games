import express from "express";
import {getStream,setStream,updateStream,deleteStream} from "../controllers/streamController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get('/me',protect,getStream);
router.post('/',protect,setStream);
router.delete('/delete',protect,deleteStream);
router.put('/update',protect,updateStream);

export default router;