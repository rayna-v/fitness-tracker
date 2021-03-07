const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => {
            return new Date()
        }
    },
    Workouts: [
        {
            type: {
                type: String,
                trim: true,
                required: "Workout type is required."
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter a name for this Workout."
            },
            duration: {
                type: Number,
                required: true
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
            distance: {
                type: Number,
            }
        }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;