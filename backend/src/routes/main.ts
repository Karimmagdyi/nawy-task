import apartmentRouter from './apartment'
import express from 'express'


const router=express.Router()
router.use('/apartment',apartmentRouter)

export default router
