const express = require('express');
const { db } = require('../models/workout');
const router = express.Router();
const Workout = require('../models/workout')

//view daily workouts
router.get('/workouts', async (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        });
})
//create new workout
router.post('/workouts', (req, res) => {
    const newWorkout = new db.Workout(req.body);
    newWorkout.timeStamp();

    db.Workout.create(newWorkout).then((dbWorkout) => {
        res.json(dbWorkout);
    })
        .catch(err => {
            res.status(400).json(err)
        });
})

//sort workouts
//track name, type, weight, sets, reps and duration of exercise
// for cardio - distance traveled
router.get('/', (req, res) => {

})

// continue with today's workout
router.patch('/:id', (req, res) => {

})




module.exports = router