import {Router } from "express";
import { ContactController } from "../controllers/contact_us";

const router  = Router({mergeParams:true})
const  controller = new ContactController()

router.route("/").get(controller.getAll).post(controller.create)
router
    .route("/:id")
    .delete(controller.delete)
    .post(controller.create)

export default router 