router.get(
  "/dashboard",
  protect,
  authorize("admin", "organizer"),
  dashboardStats
);
