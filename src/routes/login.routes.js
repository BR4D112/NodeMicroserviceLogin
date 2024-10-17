import {Router} from 'express'
import { createLogin, authLogin } from "../controllers/login.controllers.js";
const router = Router()
router.post('/Createuser',createLogin)
router.get('/Authuser',authLogin)
export default router