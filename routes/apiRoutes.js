const express = require('express');
// const { db } = require('../models');
const router = express.Router();
const Workout = require('../models/workout')

//view workout stats
router.get('/stats', (req, res) => {
    Workout.find({})
        // .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        });
})

//add to Workout
router.put('/exercise/:id', ({ body, params }, res) => {
    Workout.updateOne({ _id: params.id }, { $push: { "exercises": body } })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        });
})

// get workout data
router.get('/exercise', (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: "$exercises.duration" }
        }
    }])
        // .sort({ date: -1 })
        .then(dbWorkout => {
            // console.log(dbWorkout)
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        });
})
// create new workout
router.post('/exercise', ({ body }, res) => {
    let day = new Date();
    Workout.create({ day, body })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        });
})

router.get('/exercise/range', (req, res) => {
    Workout.find({})
        .limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        });
})




module.exports = router