const mongoose = require("mongoose");

const Item = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    require: true,
    unique: true
  },
  health:Number
  ,
  endurance:Number
  ,
  strength:Number
  ,
  intellect:Number
  ,
  agility:Number
  ,
  healing:Number
  ,
  regen:Number,
  damage: Number,
});

module.exports = mongoose.model("Item", Item);
