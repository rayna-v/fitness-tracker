const express = require('express');
// const { db } = require('../models');
const router = express.Router();
const Exercise = require('../models/exercise')

//view daily Exercises
router.get('/stats', (req, res) => {
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
router.post('/exercise', ({ body }, res) => {
    let date = new Date();
    console.log("hello")
    console.log(body)
    Exercise.create({ date, body }).then((dbExercise) => {
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
router.get('/exercise', (req, res) => {
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
// router.get('/api/exercise', (req, res) => {

// })

// // continue with today's workout
// router.patch('/exercise:id', (req, res) => {

// })




module.exports = router