mconst mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const Monster = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  photo:String,
  attacks:[{
    type:ObjectId,
    ref:"Attack"
  }],

level:{
  type:Number,
  default:1
} ,
rarity:{
type:String,
default:"common"
},
experience:{
    type:Number,
    default:0
},
health:{
    type:Number,
    default:100
},
endurance:{
    type:Number,
    default:100
},
  items: [
    {
      type: ObjectId,
      ref: "Item"
    }
  ],

});

module.exports = mongoose.model("Monster", Monster);
