const mongoose = require("mongoose")

const Player = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    gear:{
        type:Array,
        defualt: [],       
    },
    items:{
        type:Array,
        default:[]
    },
    age:String,
    class:{
     type:String,
     required:true
    },
    gender:{
        type:String,
        defualt:"Unknown"
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

    bio:String,
    password:{
        type:String,
        required:true
    },
    created:{
        type:Date,
        default:Date.now
    }

})

module.exports =mongoose.model("Player",Player)