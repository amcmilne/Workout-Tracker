// The user should be able to:

//   * view, create, and track daily workouts

//   * Add exercises to the most recent workout plan.

//   * Add new exercises to a new workout plan.

//   * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

//   * View the total duration of each workout from the past seven workouts on the `stats` page.

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const User = require("./models/Workout.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

app.post("/submit", ({ body }, res) => {
    User.create(body)
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

// When the user loads the page, they should be given the option to create a new workout 
// POST: /submit


//or continue with their last workout.
// GET: /all

// Add exercises to the most recent workout plan.
// POST: /update/:id

// Add new exercises to a new workout plan.
// POST: /submit
// POST: /update/:id

// View the combined weight of multiple exercises from the past seven workouts on the `stats` page.
// GET: 

// View the total duration of each workout from the past seven workouts on the `stats` page.
// GET: 