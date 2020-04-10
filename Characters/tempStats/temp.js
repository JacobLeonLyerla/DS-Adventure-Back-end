const mongoose = require("mongoose");

const Temp = new mongoose.Schema({
  health: {
    type: Number,

    default: 0,
  },

  endurance: {
    type: Number,

    default: 0,
  },

  attacked: {
    type: Boolean,

    default: false,
  },

  combat: {
    type: String,

    default: "Has not attacked yet",
  },

  spellUsed: {
    type: String,

    default: "any spells",
  },
});

module.exports = mongoose.model("Temp", Temp);
