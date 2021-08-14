const mongoose = require('mongoose');

//Schema 
const mentorSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:2,
        maxLength:50,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        minLength:2,
        maxLength:50,
        required:true,
        trim:true
    },
    gender:{
        type:String,
        enum:['m','f'],
        required:true
    },
    module:{
        type:[String],
        enum:['Maquetado','Js','Cloud','Backend','React'],
        min:1,
        max:13,
        required:true
    }
})
//model
const model = mongoose.model('mentors',mentorSchema);
module.exports = model