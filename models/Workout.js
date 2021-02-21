const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: String,
  body: String
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;