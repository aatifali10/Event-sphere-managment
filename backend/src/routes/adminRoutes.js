import express from "express";
import { dashboardStats } from "../controllers/adminController.js";
import { protect } from "../middlewares/authMiddlewares.js";
import { authorize } from "../middlewares/roleMiddlewares.js";

const adminRoutes = express.Router();

adminRoutes.get(
  "/dashboard",
  protect,
  authorize("admin", "organizer"),
  dashboardStats
);

export default adminRoutes;
