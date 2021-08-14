const mongoose = require('mongoose')
const Mentor = require('./mentors')


const cellSchema= new mongoose.Schema({
  // Array of subdocuments
    name:{
        type:String,
        minLength:2,
        maxLength:50,
        required:true,
        trim:true
    },
    mentors: {
        type:[{ type: mongoose.Schema.ObjectId, ref: "mentors" }],
        default:[]
    }
  // Single nested subdocuments. Caveat: single nested subdocs only work
  // in mongoose >= 4.2.0
});

const model = mongoose.model('cell',cellSchema);
module.exports = model