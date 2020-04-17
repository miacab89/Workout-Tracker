const mongoose = require("mongoose");
const Schema = mongoose.workoutSchema;

const workoutSchema = ({

  day: {
    type: {Date, required: true}
  },

  exercises: {
    type: {String, required: true},
    name: {String, required: true},
    duration: {Number, required: true}, 
    reps: {Number, required: true},
    sets: {Number, required: true}, 
    distance: {Number, required: true}
  }}); 

const workout = mongoose.model("Work Out", workoutSchema);

module.exports = workout;