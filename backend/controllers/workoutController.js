const Workout = require('../models/workoutModel')

// get all workouts <3
const getWorkouts = async (req, res) => {
    const workouts = await workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//get a single workout <3

const getWorkout = async (req, res) => {
    const { id } = req.params
}

// delete a workout <3



// creat a new workout <3
const createWorkout = async (req, res) =>{
    const {title, load, reps} = req.body
 // add doc to db 
    try {
      const workout = await Workout.create({title, load, reps})
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}


// update a workout <3


modules.exports ={
    createWorkout
}