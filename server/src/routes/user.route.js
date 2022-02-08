const express = require('express')
const User = require('../models/user')
const router = express.Router();
const UserController = require('../controllers/user.controller')

router.get('/', UserController.getAllUser);
  
router.post('/',async (req,res)=>{
    try{
        const {nombre, apellido,mail} = req.body
        const user = new User({nombre, apellido, mail})
        await user.save()
        res.json({status: 'Usuario Guardado'})
        }catch(err) {
            console.log(err); // TypeError: failed to fetch
            res.json({status:'Se genero un error', error: err})
        }

  });

router.put('/:id', async (req, res)=>{
    try{
    const {nombre, apellido, mail} = req.body
    const putUser = {nombre, apellido}
    await User.findByIdAndUpdate(req.params.id, putUser);
    res.status(200).json({status:`se actualizo usuario ${req.params.id}`})
    } catch(err){
        console.log(err); // TypeError: failed to fetch
        
        res.json({status:'Se genero un error', error: err})
    }

})

router.delete('/:id', async(req, res)=>{
    try{
        await User.findByIdAndRemove(req.params.id)
        res.status(200).json({message:`Se elimino correctamente el usuario ${req.params.id}`})
    }catch(err){
        res.json({status:'Ocurrio un error al eliminar', error: err})
    }
})

module.exports = router;