import { Router } from "express";
import AuthController from "../controllers/auth";

const router: Router = Router();
router.get("/token/:id", AuthController.getToken);

export default router;
