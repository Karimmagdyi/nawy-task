import express from "express";
import { createApartment, getAllApartment, getApartmentById } from "../controllers/apartmentController";

const router=express.Router()

router.get('/',getAllApartment)
router.get('/:id',getApartmentById)
router.post('/',createApartment)

export default router