const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatsSchema = new Schema({
    name: {
        type: String,
        trim: true, 
        required: "Name is Required"
    }, 
    type: {
        type: String,
        trim: true
    }, 
    weight: {
        type: Number,
        trim: true, 
    }, 
    sets: {
        type: Number,
        trim: true,
    }, 
    reps: {
        type: Number,
        trim: true, 
    },
    duration: {
        startTime: Date, 
        endTime: Date, 
    }  
});

const Stats = mongoose.model("Stats", StatsSchema);

module.exports = Stats;
