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

  slot:{
    type:String,

    required:true
  },

  health:{
    type:Number,

    default:0
  },

  endurance:{
    type:Number,

    default:0
  },

  strength:{
    type:Number,

    default:0
  },

  intellect:{
    type:Number,

    default:0
  },

  agility:{
    type:Number,

    default:0
  },

  healing:{
    type:Number,

    default:0
  },

  damage: {
    type:Number,

    default:0
  },

  rarity:{
    type:String,
    
    default:"common"
  }
  
});

module.exports = mongoose.model("Item", Item);
