const express = require('express')
const User = require('../models/user')
const router = express.Router();
const UserController = require('../controllers/user.controller')

router.get('/', UserController.getAllUser);
router.post('/', UserController.createUser);
router.put('/', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
router.post('/login',UserController.userLogin)
module.exports = router;