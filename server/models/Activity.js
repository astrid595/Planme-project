import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  activity_name: { type: String, required: true },
  activity_description: { type: String },
  activity_length: { type: String },
  activity_category: { type: String },
  indoors: { type: Boolean, default: false },
});

const Activity = mongoose.model("Activity", activitySchema);
export default Activity;