const Mentor = require('../models/mentors.js');
const mongoose = require('mongoose');
function getAll(){
    return Mentor.find();
}
function getOne(id){
    return Mentor.find({_id:id});
}
function create(mentor){
    return Mentor.create(mentor);
}
function deleteById(id){
    return Mentor.findByIdAndDelete(id)
}
function updateById(id,newData){
    return Mentor.findByIdAndUpdate(id,newData,{new:true})
}

module.exports = {
    getAll,
    create,
    deleteById,
    updateById,
    getOne
}