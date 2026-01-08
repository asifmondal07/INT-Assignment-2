import express from 'express'
import { generateEmailController } from '../controllers/emailController.js'
    
const router=express.Router()

router.post("/generate-email",generateEmailController)


export default router