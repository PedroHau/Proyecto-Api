const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const TaskSchema = new Schema({
    nombre: String,
    email: String,
    phone: Number,
});

module.exports = mongoose.model('tasks', TaskSchema);