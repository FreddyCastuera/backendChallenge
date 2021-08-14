const Koder = require('../models/koders.js');
const mongoose = require('mongoose');
const bcrypt = require('../lib/bcrypt');

function getAll(){
    return Koder.find();
}
async function create(koder){
    const {email,password} = koder;
    const koderFound = await Koder.findOne({email});
    if(koderFound) throw new Error('El email de koder ya existe');
    //encrptar el password
    const enctryptedPassword = await bcrypt.hash(password);
    //cambiamos el password del koder por el encriptado
    return Koder.create({...koder,password:enctryptedPassword});
}



function deleteById(id){
    return Koder.findByIdAndDelete(id)
}
function updateById(id,newData){
    return Koder.findByIdAndUpdate(id,newData,{new:true})
}

module.exports = {
    getAll,
    create,
    deleteById,
    updateById
}