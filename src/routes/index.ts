import { Router } from "express";
import ContactRouter from "./contact_us"

const router = Router({mergeParams:true})

router.use("/contact", ContactRouter)


export default router