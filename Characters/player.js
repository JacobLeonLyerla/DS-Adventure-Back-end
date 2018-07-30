const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId;
const Player = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
  

    age:{
       type:String,
       default:"Unknown"
    },
    class:{
     type:String,
     required:true
    },
   
    health:{
        type:Number,
        default:100
    },
    endurance:{
        type:Number,
        default:100
    },
    strength:{
        type:Number,
        default:10
    },
    intellect:{
        type:Number,
        default:10
    },
    agility:{
        type:Number,
        default:10
    },

    bio:{
        type:String,
        default:"Mystery adventurer."
    },
    password:{
        type:String,
        required:true
    },
    created:{
        type:Date,
        default:Date.now
    },
    gender:{
        type:String,
        default:"Unknown"
    },
    items:[
        {
        type:ObjectId,
        ref:'Item'
    },
],
gear:[
    {
    type:ObjectId,
    ref:'Item'
},
]
})

module.exports =mongoose.model('Player',Player)