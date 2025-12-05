import mongoose from "mongoose";

const streakSchema = new mongoose.Schema(
  {
    streakDay: { type: String, required: true },
    topicName: { type: String, required: true },
    projectUrl: { type: String, required: true },
  },
  { timestamps: true }
);

const Streak = mongoose.model("Streak", streakSchema);
export default Streak;
