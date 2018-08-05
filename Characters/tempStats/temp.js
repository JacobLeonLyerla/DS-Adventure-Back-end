const mongoose = require("mongoose")
const Temp = new mongoose.Schema({

    health:{
        type:Number,
        default:0,

    },
    endurance:{
        type:Number,
        default:0
    },
    attacked:{
        type:Boolean,
        default:false
    }

})

module.exports =mongoose.model('Temp',Temp)