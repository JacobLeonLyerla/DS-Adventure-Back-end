const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const Player = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  currentLocation: {
    type: ObjectId,
    ref: "Area"
  },
  tempPlayer: {
    type: String,
    default: "no temp"
  },
  tempMonster: {
    type: String,
    ref: "no temp"
  },
  currentSpell: {
    type: Number,
    default: 0
  },

  age: {
    type: String,
    default: "Unknown"
  },
  class: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    default: 0
  },
  level: {
    type: Number,
    default: 1
  },
  currentBattle: [
    {
      type: ObjectId,
      ref: "Monster"
    }
  ],
  attacks: [
    {
      type: ObjectId,
      ref: "Attack"
    }
  ],

  health: {
    type: Number,
    default: 100
  },
  endurance: {
    type: Number,
    default: 100
  },
  strength: {
    type: Number,
    default: 10
  },
  intellect: {
    type: Number,
    default: 10
  },
  agility: {
    type: Number,
    default: 10
  },
  head: {
    type: String,
    default: "none"
  },
  shoulders: {
    type: String,
    default: "none"
  },
  chest: {
    type: String,
    default: "none"
  },
  hands: {
    type: String,
    default: "none"
  },
  leggings: {
    type: String,
    default: "none"
  },
  feet: {
    type: String,
    default: "none"
  },
  weaponOneHand: {
    type: String,
    default: "none"
  },
  weaponTwoHand: {
    type: String,
    default: "none"
  },
  shield: {
    type: String,
    default: "none"
  },
  charm: {
    type: String,
    default: "none"
  },
  offHand: {
    type: String,
    default: "none"
  },

  bio: {
    type: String,
    default: "Mystery adventurer."
  },
  password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  gender: {
    type: String,
    default: "Unknown"
  },
  items: [
    {
      type: ObjectId,
      ref: "Item"
    }
  ],
  gear: [
    {
      type: ObjectId,
      ref: "Item"
    }
  ],
  defeatedName: {
    type: String,
    default: "none"
  },
  experienceGained: {
    type: Number,
    default: 0
  },
  itemWon: {
    type: String,
    default: "none"
  },
  leveled: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Player", Player);
