const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    day: {
        type: Date,
        default: () => {
            new Date()
        }
    },
    Exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise type is required."
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter a name for this Exercise."
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

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;