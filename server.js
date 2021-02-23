const express = require("express");
const logger = require("morgan");
//const mongoose = require("mongoose");
const connectDB = require ("./DB/connection2");
require('dotenv').config();

connectDB();
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
//===============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(logger("dev"));

// // Sets up the connection
// // ==============================================================
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// Sets up required routes
// =============================================================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
