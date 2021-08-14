//definicion de servidor
const express = require('express');
const server = express();
const kodersRouter = require('./routers/koders');
const mentorRouter = require('./routers/mentors');
const cellRouter = require('./routers/cells');



//middleware
server.use(express.json())
server.use(function(request,response,next){
    console.log('---------------datos de la peticion------------------');
    console.log('el metodo es: ',request.method);
    console.log('la url es: ',request.url);
    console.log('el cuerpo es: ',request.body);
    console.log('------------------------------------------------------');
    next();
})

//agregabamos los routers

server.use('/koders',kodersRouter)
server.use('/mentors',mentorRouter)
server.use('/cells',cellRouter)
module.exports = server

//Requerimiento 
//Endpoint GET /koders.
//1.Asegurarnos que nuestro modelo exista.
//2.Crear el caso de uso necesario.
//3.Crear el endpoint ->

//Endpoint POST /koders.
//Endpoint DELETE /koders/:id

//Practica Final

//--------------primera parte----------
//propiedades de mentor:
//name:String,lastName:String,modulo:[String][maquetado,js,cloud,balckend,react],gender[f,m]
//kodemia necesica poder gestionar mentores
//-crear mentores
//-actualizar mentores
//-eliminar mentores
// obtener el detalle de un mentor
// obtener todos los mentores

//------------segunda parte-----------------
//kodemia tambien necesita gestionar sus celulas de mentores
//que es una celula de mentores? Es un grupo de mentores que pueden ser
//asingados a un grupo. 
//tiene un nombre que lo identifica
//tiene que mentores pertenecen a dicha celula

//que podamos crear celulas de mentores
//actualizar
//eliminarlas
//obtener detalles 

//crear un middleware que imprima en pantalla el metodo, ruta y el body
//de la peticion