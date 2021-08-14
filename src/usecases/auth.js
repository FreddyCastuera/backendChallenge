const Koder = require('../models/koders');
const bcrypt  = require('../lib/bcrypt');

async function login(email,password){
    const koderFound = await Koder.findOne({email});
    if(!koderFound) throw new Error('Invalid Credentials');
    const isValidPassword = await bcrypt.compare(password,koderFound.password);
    if(!isValidPassword) throw new Error('Invalid Credentials')
    //regresa un token

}

//