const express = require('express');
const router = express.Router();
const Mentors = require('../usecases/mentors');
router.use(express.json());
router.get('/',async (request,response)=>{
    try{
        const allMentors = await Mentors.getAll();
        response.json({
            success:true,
            message:'Todos los mentores',
            data:{
                mentors:allMentors
            }
        })
    }
    catch(error){
        response
            .status(400)
            .json({
                success:false,
                message:'Error al obtener los mentores',
                error:error.message
            })
        }
})
router.get('/:id',async (request,response)=>{
    try{
        const {id} = request.params;
        const mentor = await Mentors.getOne(id);
        response.json({
            success:true,
            message:'Un mentor',
            data:{
                mentor:mentor
            }
        })
    }
    catch(error){
        response
            .status(400)
            .json({
                success:false,
                message:'Error al obtener el mentor',
                error:error.message
            })
        }
})



router.post('/',async (request,response)=>{
    try{
        const MentorCreated = await Mentors.create(request.body);
        console.log(request.body)
        response.json({
            success:true,
            message:'mentor crerado',
            data:{
                mentors:MentorCreated
            }
        })
    }
    catch(error){
        response
            .status(400)
            .json({
                success:false,
                message:'Error al crear al mentor',
                error:error.message
            })
        }
})
router.delete('/:id',async (request,response)=>{
    try{
        const {id} = request.params;
        const mentorDeleted = await Mentors.deleteById(id);
        response.json({
            success:true,
            message:'mentor eliminado',
            data:{
                mentors:mentorDeleted
            }
        })
    }
    catch(error){
        response
            .status(400)
            .json({
                success:false,
                message:'Error al eliminar al mentor',
                error:error.message
            })
        }
})
router.patch('/:id',async (request,response)=>{
    try{
        const {id} = request.params;
        const {body} = request;
        console.log(id,body)
        const mentorUpdated = await Mentors.updateById(id,body);
        response.json({
            success:true,
            message:'Mentor Actualizado',
            data:{
                mentros:mentorUpdated
            }
        })
    }
    catch(error){
        response
            .status(400)
            .json({
                success:false,
                message:'Error al actualizar al mentor',
                error:error.message
            })
        }
})

module.exports = router