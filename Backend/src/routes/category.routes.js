import express from "express";
import { createCategory, listCategories } from "../controllers/category.controller.js";
import { protect, adminOnly } from "../middlewares/auth.middleware.js";

const router = express.Router();
router.get("/", listCategories);
router.post("/", protect, adminOnly, createCategory);
export default router;
