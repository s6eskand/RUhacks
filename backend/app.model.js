const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Calendar = new Schema({
    isStudy: {
        type: Boolean,
        required: true,
    },
    sleepStart: {
        type: String,
    },
    sleepDuration: {
        type: String,
    },
    time: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    breakInterval: {
        type: String,
    }
})

module.exports = mongoose.model('Calendar', Calendar);