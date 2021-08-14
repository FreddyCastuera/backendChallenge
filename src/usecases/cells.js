const Cell = require('../models/cells.js');
const mongoose = require('mongoose');
function getAll(){
    return Cell.find().populate('mentors');
}
function getOneByName(name){
    return Cell.find({name:name}).populate('mentors');
}

function create(cell){
    return Cell.create(cell);
}
async function addMentor(cellName,mentor){
    let celula = await getOneByName(cellName);
    const {mentors} = celula[0];
    const newMentors = [...mentors,mentor]
    return Cell.findOneAndUpdate({name:cellName},{mentors:newMentors})
}
async function removeMentor(cellName,mentorId){
    let celula = await getOneByName(cellName);
    const {mentors} = celula[0];
    const newMentors = mentors.filter(mentor=>mentor._id!=mentorId)
    /*console.log('old mentors: ',JSON.stringify(mentors,null,2));
    console.log('new mentors: ',JSON.stringify(newMentors,null,2));*/
    return Cell.findOneAndUpdate({name:cellName},{mentors:newMentors})
}

/*const leerDatos = async () =>{
    let datos = await getOneByName('Js');
    const {mentors} = datos[0]
    console.log(mentors)
}*/
function deleteById(id){
    return Cell.findByIdAndDelete(id)
}
/*
function updateById(id,newData){
    return Mentor.findByIdAndUpdate(id,newData,{new:true})
}*/
module.exports = {
    getAll,
    create,
    getOneByName,
    addMentor,
    removeMentor,
    deleteById
    
}