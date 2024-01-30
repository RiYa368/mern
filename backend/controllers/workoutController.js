const Workout = require('../models/workoutModel')
const mongoose = require('mongoose/')
// get all workouts <3
const getWorkouts = async (req, res) => {
    const workouts = await workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//get a single workout <3

const getWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error: "no such workout"})
    }

    const workout = await Workout.findById(id)

    if(!workout) {
      return res.status(404).json({error:"no such workout"})
    }
    res.status(200).json(workout)
}

// delete a workout <3
const deleteWorkout = async (req, res) =>{
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "no such workout"})
  }  

  const workout = await Workout.findOneAndDelete({_id: id})

  if(!workout) {
    return res.status(404).json({error:"no such workout"})
  }
res.status(200).json(workout)
}
(workout)
// create a new workout <3
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


modules.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout
}