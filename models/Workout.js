const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
      },
      name: {
        type: String,
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      userCreated: {
        type: Date,
        default: Date.now,
      }
    }
  ],
  totalDuration: {
    type: Number,
    default: 0,
  }
});
//Schema.path('_id');
//doc._id instanceof mongoose.Types.ObjectId;

const Workout = mongoose.model("Workout", WorkoutSchema);

// Workout.aggregate([{
//   $group: {
//     _id: "$_id",
//     totalDuration: { $sum: "$duration" }
//   }
// }])

module.exports = Workout;
