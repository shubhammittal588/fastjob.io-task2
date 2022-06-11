const mongoose = require('mongoose')
const { Integer } = require('read-excel-file/types')

const Schema = mongoose.Schema

const Pets = new Schema({
    'Name': {
        type: String,
        required: true
    },
    'Type': {
        type: String,
        required: true
    },
    'Breed': {
        type: String,
        required: true
    },
    'Age': {
        type: Number,
        required: true
    }

})


module.exports = mongoose.model('Pets', Pets)