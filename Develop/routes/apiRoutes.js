const express = require('express');
const { db } = require('../models');
const router = express.Router();
const Exercise = require('../models/exercise')

//view daily Exercises
router.get('/api/stats', (req, res) => {
    Exercise.find({})
        // .sort({ date: -1 })
        .then(dbExercise => {
            console.log(dbExercise)
            res.json(dbExercise)
        })
        .catch(err => {
            res.status(400).json(err)
        });
})
//create new Exercise
router.post('/api/exercise', (req, res) => {
    const newExercise = new db.Exercise(req.body);
    newExercise.timeStamp();

    db.Exercise.create(newExercise).then((dbExercise) => {
        console.log(dbExercise)

        res.json(dbExercise);
    })
        .catch(err => {
            res.status(400).json(err)
        });
})

//sort workouts
//track name, type, weight, sets, reps and duration of exercise
// for cardio - distance traveled
// router.get('/', (req, res) => {

// })
// router.get('/exercise', (req, res) => {

// })
// router.get('/api/exercise', (req, res) => {

// })

// // continue with today's workout
// router.patch('/exercise:id', (req, res) => {

// })




module.exports = router