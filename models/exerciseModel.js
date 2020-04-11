const mongoose = require("mongoose");
const Seed = mongoose.workoutSeed;

const workoutSeed = ({

  exercises: {
    type: {String, required: true},
    name: {String, required: true},
    duration: {Number, required: true}, 
    reps: {Number, required: true},
    sets: {Number, required: true}, 
    distance: {Number, required: true}
  }}); 

const workout = mongoose.model("Work Out", workoutSeed);

module.exports = workout;