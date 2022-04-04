import { Router } from "express";
import { Request, Response } from "express";
import User, { IUser } from "../models/User";
import Notas, { INotas } from "../models/Notas";
import passport from "passport"
const router = Router();




// mostrar nota 
router.get('/home', passport.authenticate("jwt", {session: false}), async (req, res) => {
    const {author} = req.body
    const date = await Notas.find({author: author})
    console.log(date);

    if(!date){
        return res.status(400).json("No hay nada")
    }
    return res.status(201).json(date)
})

//crear nota 
router.post('/home', passport.authenticate("jwt", {session: false}), async (req, res) => {
    const {name, edad, grado, author, id} = req.body
    const user = await User.find({ _id: id})

    if (!name && !edad && !grado && !author ) {
        return res.status(400).json("se requiere todos los campos")
    }
    
    if ( id === user[0]._id.toString()){
        const newNota = new Notas({
            name: name,
            edad: edad,
            grado: grado,
            author: user[0]._id,
        })
        await newNota.save()   
        return res.status(201).json(newNota)
    } 


    return res.status(400).json("No se encuentra al usuario")
})

//editar nota 

router.put('/home', passport.authenticate("jwt", {session: false}), async (req, res) => {
    const { name, edad, grado, id } = req.body
    const user = await Notas.find({_id:id})


    if(id === user[0]._id.toString()){
       const persona = await Notas.updateOne({_id:id},
        {
            $set:{
                name: name,
                edad: edad,
                grado: grado,
            }
        })
        return res.status(201).json("true")
    }

    return res.status(201).json("error")
})


// eliminar notas para
router.delete('/home', passport.authenticate("jwt", {session: false}), async (req, res) => {
    const { id } = req.body
    const user = await Notas.find({_id:id})


    if(id === user[0]._id.toString()){
        const persona = await Notas.deleteOne({_id:id})

        return res.status(201).json("true")
    }

    return res.status(201).json("error")
})



export default router;


