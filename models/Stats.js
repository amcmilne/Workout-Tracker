const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatsSchema = new Schema({
    name: {
        type: String,
        trim: true, 
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

//schema.path('_id');
//doc._id instanceof mongoose.Types.ObjectId;

const Stats = mongoose.model("Stats", StatsSchema);

module.exports = Stats;
