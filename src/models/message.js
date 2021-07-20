const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MassSchema = new Schema({
    Mensaje: String
});
module.exports = mongoose.model('messages', MassSchema);