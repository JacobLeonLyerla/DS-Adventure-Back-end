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
    bio:String,
    password:{
        type:String,
        required:true
    }
})

module.exports =mongoose.model("Player",Player)