const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Calendar = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    isStudy: {
        type: Boolean,
        required: true,
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
});

// let Info = new Schema({
//     sleepStart: {
//         type: String,
//         required: true
//     },
//     sleepDuration: {
//         type: String,
//         required: true
//     },
//     exercise: {
//         type: String,
//         required: true
//     },
//     studyBreakIntervals: {
//         type: String,
//     },
//     studyHabits: {
//         type: String,
//     },
//     daysOfSchool: {
//         type: String,
//         required: true,
//     },
//     schoolDay1: {
//         type: String,
//         required: false,
//     },
//     schoolDay2: {
//         type: String,
//         required: false,
//     },
//     schoolDay3: {
//         type: String,
//         required: false,
//     },
//     schoolDay4: {
//         type: String,
//         required: false,
//     },
//     schoolDay5: {
//         type: String,
//         required: false,
//     }
// });

module.exports = mongoose.model('Calendar', Calendar);
// module.exports = mongoose.model('Info', Info);