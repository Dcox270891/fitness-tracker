const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkOutShema = new Schema({
  exercisesInWorkOut: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Exercise' 
  }],
  day:{
    type: Date,
    required: true
  },
  completed: {
    type: Boolean,
    default: false,
  }
});

const ExerciseShema = new Schema({
  exerciseType:{
    required: true, 
    trim: true,
    type: String, enum: ["Cardio", "Resistance"]
  },
  exerciseName:{
    required: true,
    trim: true,
    type: String
  },
  wieght:{
    type: Number
  },
  sets:{
    type: Number
  },
  reps:{
    type: Number
  },
  distance:{
    type: Number
  },
  duration:{
    type: Number
  }
});

const Exercise = mongoose.model("Exercise", ExerciseShema);
const WorkOut = mongoose.model("WorkOut", WorkOutShema);

module.exports = WorkOut;
