// The user should be able to:

//   * view, create, and track daily workouts
//   * Add exercises to the most recent workout plan.
//   * Add new exercises to a new workout plan.
//   * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.
//   * View the total duration of each workout from the past seven workouts on the `stats` page.

//  ===========================================================================================  //

const Stats = require("../models/stats.js");
const Workout = require("../models/workout.js");
//const db = require("./models");

module.exports = function (app) {
  // When the user loads the page, they should be given the option to create a new workout
  // GET: /all
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        dbWorkout.forEach(workout => {
          var total = 0;
          workout.exercises.forEach(e => {
            total += e.duration;
          });
          workout.totalDuration = total;
        });

        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // POST:
  // Add exercises to the most recent workout plan.
  app.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // PUT: /update/:id
  //or continue with their last workout.
  app.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
      { _id: req.params.id },
        {$inc: { totalDuration: req.body.duration } },
        {$push: { exercises: req.body } },
        { new: true }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // View the combined weight of multiple exercises from the past seven workouts on the `stats` page.
  // View the total duration of each workout from the past seven workouts on the `stats` page.
  // GET:
  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
