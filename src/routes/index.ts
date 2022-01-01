import { Router } from "express";
import ContactRouter from "./contact_us"
import SendRouter from "./send"

const router = Router({mergeParams:true})

router.use("/contact", ContactRouter)
router.use("/send",SendRouter)


export default router