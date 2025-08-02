import { Router } from "express";
import { responseFromTwilio } from "../controllers/response.controller.js";

const router=Router()

router.route("/handle-response").post(responseFromTwilio);

export default router