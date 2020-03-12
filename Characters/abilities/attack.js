const mongoose = require("mongoose");

const Attack = new mongoose.Schema({
  name: {
    type: String,

    required: true,

    unique: true
  },

  level: {
    type: Number,

    default: 0
  },

  cost: {
    type: Number,

    default: 0
  },

  damage: {
    type: Number,

    default: 0
  },

  leach: {
    type: Number,

    default: 0
  },

  drain: {
    type: Number,

    defualt: 0
  },

  hitChance: {
    type: Number,

    default: 25
  },

  description: String
});

module.exports = mongoose.model("Attack", Attack);