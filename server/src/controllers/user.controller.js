const UserModel = require('../models/user');
const HttpException = require('../utils/HttpException.utils');
// const { validationResult } =require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const deteven = require('dotenv');
// dotenv.config()

class UserController {
    getAllUser = async (req, res, next)=>{
        const userList = await UserModel.find();
        console.log('nueva modificacion')
        res.send(userList)     
    }

    getUserById = async (req, res, next)=>{
        const {nombre, apellido, mail} = req.body
        const user = new User({nombre, apellido, mail})
        result = await user.save()
        if (!result){
            throw new HttpException(500, 'Something went wrong');
        }
        res.json({status: 'Usuario Guardado'})
    }

    createUser = async (req, res, next)=>{
        //try{
            console.log(req.body)
            await this.hashPassword(req);
            console.log(req.body)
            const {nombre, apellido,mail, password} = req.body;
            const user = new UserModel({nombre, apellido, mail,password});
            await user.save();
            res.json({status: 'Usuario Guardado'})
   // }catch(err){
            //res.status(500).json({status:'Something went wrong', "error": err})
      //  }
    }
    

    deleteUser = async (req, res, next)=>{
        //try{
            await UserModel.findByIdAndRemove(req.params.id)
            res.status(200).json({message:`Se elimino correctamente el usuario ${req.params.id}`})
        //}catch(err){
        //    res.json({status:'Ocurrio un error al eliminar', error: err})
       // }
    }

    updateUser = async (req, res, next)=>{
        try{
            const {nombre, apellido, mail} = req.body
            const putUser = {nombre, apellido}
            await User.findByIdAndUpdate(req.params.id, putUser);
            res.status(200).json({status:`se actualizo usuario ${req.params.id}`})
            } catch(err){
                console.log(err); // TypeError: failed to fetch
                res.json({status:'Se genero un error', error: err})
            }
        
    }
    userLogin = async (req, res, next)=>{
        const {mail, password: pass} = req.body;
        const user = await UserModel.findOne({"mail": mail}).exec();
        console.log('pass')
        console.log(mail)
        console.log('user.password')
        console.log(user)
        if (!user){
            res.status(401).json({"status": "User not found"})
        }
        const isMatch = await bcrypt.compare(pass, user.password)
        if (!isMatch){
            res.status(401).json({"status": "password Incorrect"})
        }
        res.status(200).json({"status": "password correct"})
    }

    hashPassword = async (req) => {
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 8);
        }
    }
}

module.exports = new UserController;