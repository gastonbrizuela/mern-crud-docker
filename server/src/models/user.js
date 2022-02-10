const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    nombre: { type: String, required:true },
    password: { type: String, required:true},
    apellido: {type: String, required: true},
    mail: {type: String, required: true}
});

module.exports = mongoose.model('User', UserSchema)