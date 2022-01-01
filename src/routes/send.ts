import {Router } from "express";
import { SendController } from "../controllers/send";

const router  = Router({mergeParams:true})
const  controller = new SendController()

router.route("/").get(controller.getAll).post(controller.create)
router
    .route("/:id")
    .delete(controller.delete)
    .post(controller.create)

export default router 