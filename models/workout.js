const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
        unique: true
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Please enter the exercise type",
        },
        name: {
            type: String,
            trim: true,
            required: "Please enter the exercise name",
        },  
        duration: {
            type: Number,
            required: "Duration of exercise is required",
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        }
    }]
},{
    toJSON: {
        virtuals: true
    }
});

WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce(function(total, exercise) {
        return total + exercise.duration;
    }, 0);
});

module.exports = mongoose.model("Workout", WorkoutSchema);