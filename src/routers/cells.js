const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const cell = require('../usecases/cells');
router.use(express.json());
//ver todas las celulas
router.get('/',async (request,response)=>{
    try{
        const allCells = await cell.getAll();
        response.json({
            success:true,
            message:'All cells',
            data:{
                cells:allCells
            }
        })
    }
    catch(error){
        response
            .status(400)
            .json({
                success:false,
                message:'Error al obtener los las celulas',
                error:error.message
            })
        }
})
//ver una celula por nombre
router.get('/:name',async (request,response)=>{
    try{
        const {name} = request.params;
        console.log(name);
        const celula = await cell.getOneByName(name);
        
        response.json({
            success:true,
            message:`celula con nombre ${name}`,
            data:{
                celula:celula
            }
        })
    }
    catch(error){
        response
            .status(400)
            .json({
                success:false,
                message:'Error al obtener la celula',
                error:error.message
            })
        }
})
//crear una nueva celula
router.post('/', async (request,response)=>{
    try{
        const {name} = request.body
        const newCell = await cell.create(request.body);
        response.json({
            success:true,
            message:`celula con nombre ${name} creada`,
            data:{
                celula:newCell
            }
        })
    }
    catch(error){
        response
            .status(400)
            .json({
                success:false,
                message:'Error al crear la celula',
                error:error.message
            })
        }
})
//agregar/eliminar un mentor a una celula
router.patch('/:name',async (request,response)=>{
    try{
        const {name} = request.params;
        const {action} = request.query;
        const {id} = request.body;
        console.log(name);
        console.log(action);
        console.log(id);
        let updatedCell = null;
        if(action == "add"){
            updatedCell = await cell.addMentor(name,id);
        }
        if(action == "remove"){
            updatedCell = await cell.removeMentor(name,id);
        }

        response.json({
            success:true,
            message:`mentor agregado a la celula ${name}`,
            data:{
                celula:updatedCell
            }
        })
    }
catch(error){
    response
        .status(400)
        .json({
            success:false,
            message:'Error al agregar mentor a la celula',
            error:error.message
        })
    }
})
router.delete('/:id',async (request,response)=>{
    try{
        const {id} = request.params
        console.log(id)
        let deletedCell = await cell.deleteById(id);
        response.json({
            success:true,
            message:`eliminamos la celula con id ${id}`,
            data:{
                celula:deletedCell
            }
        })
    }
    catch(error){
        response
            .status(400)
            .json({
                success:false,
                message:'Error al eliminar la celula',
                error:error.message
            })
        }
})






module.exports = router