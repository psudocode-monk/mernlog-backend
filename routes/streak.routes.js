import { Router } from "express";
import { createStreak, getStreaks } from "../controllers/streak.controllers.js";

const router = Router();

router.post("/form", createStreak);
router.get("/projects", getStreaks);

export default router;
