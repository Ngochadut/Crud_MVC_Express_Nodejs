const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    age : Number,
    gender : Boolean
    // userName : {
    //     type : String,
    //     required : true,
    //     trim: true,
    //     min:8,
    //     max: 255
    // }
})

module.exports =  mongoose.model('User',userSchema,'users')