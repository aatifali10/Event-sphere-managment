import User from "../models/authModel.js";

export const dashboardStats = async (req, res) => {
  const users = await User.countDocuments();
  const exhibitors = await User.countDocuments({ role: "exhibitor" });
  const attendees = await User.countDocuments({ role: "attendee" });

  res.json({
    totalUsers: users,
    exhibitors,
    attendees,
  });
};
