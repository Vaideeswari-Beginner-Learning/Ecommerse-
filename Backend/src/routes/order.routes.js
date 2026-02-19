import express from "express";
import { createOrder, getUserOrders } from "../controllers/order.controller.js";
import { protect } from "../middleware/auth.middleware.js"; // Need to create/ensure this exists

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/", protect, getUserOrders);

export default router;
