const UserModel = require('../models/user');
const HttpException = require('../utils/HttpException.utils');
// const { validationResult } =require('express-validator');
// const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
// const deteven = require('dotenv');
// dotenv.config()


class UserController {
    getAllUser = async (req, res, next)=>{
        const userList = await UserModel.find();
        console.log('nueva modificacion')
        res.send(userList)     
    }

    getUserById = async (req, res, next)=>{
        console.log('obtener usuario por su id')
    }

    createUser = async (req, res, next)=>{
        console.log('crear un usuario')
    }

    deleteUser = async (req, res, next)=>{
        console.log('eliminar un usuario')
    }

    updateUser = async (req, res, next)=>{
        console.log('modificar un usuario')
    }
}

module.exports = new UserController;