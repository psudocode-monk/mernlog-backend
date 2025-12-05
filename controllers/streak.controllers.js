import Streak from "../models/streak.models.js";

export const createStreak = async (req, res) => {
  try {
    const { streakDay, topicName, projectUrl } = req.body;

    if (!streakDay || !topicName || !projectUrl)
      return res.status(400).json({ message: "All fields are required" });

    await Streak.create({
      streakDay,
      topicName,
      projectUrl,
    });
    res.status(201).json({
      message: "Streak created successfully",
      data: {
        streakDay,
        topicName,
        projectUrl,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStreaks = async (req, res) => {
  try {
    const streaks = await Streak.find();
    res.status(200).json(streaks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
