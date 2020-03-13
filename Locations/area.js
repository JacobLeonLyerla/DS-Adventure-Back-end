const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const Area = new mongoose.Schema({
  name: {
    type: String,

    required: true,

    unique: true
  },

  monsters: [{
    type: ObjectId,

    ref: "Monster"
  }],

  items: [{
    type: ObjectId,

    ref: "Item"
  }],

  teir: {
    type: Number,

    default: 1
  },

  west: [{
    type: ObjectId,

    ref: "Area"
  }],

  east: [{
    type: ObjectId,

    ref: "Area"
  }],

  north: [{
    type: ObjectId,

    ref: "Area"
  }],

  south: [{
    type: ObjectId,

    ref: "Area"
  }]
});

module.exports = mongoose.model("Area", Area);