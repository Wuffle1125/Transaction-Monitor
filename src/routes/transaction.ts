import { Router } from "express";
import TransactionController from "../controllers/transaction"
import authMiddleware from "../middlewares/auth";

const router: Router = Router();
router.get("/unconfirmed", authMiddleware, TransactionController.get);

export default router;
