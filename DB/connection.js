const mongoose = require("mongoose");
const MONGODB_URI =
  "mongodb+srv://dbUser:dbUser@cluster0.nczo0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  console.log("db has connected");
};

module.exports = connectDB;
