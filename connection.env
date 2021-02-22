const mongoose = require("mongoose");
const URI = "mongodb+srv://dbUser:dbUser@cluster0.nczo0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
   await mongoose.connect(URI, {
      useUnifiedTopology: true, 
      useNewUrlParser: true
   });
   console.log("db has connected");
}

module.exports = connectDB;