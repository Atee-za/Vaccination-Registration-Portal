const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalI = new Schema({
    ID_Number: {type: String, required: true},
    Passport: {type: String, required: false},
    Dob: {type: Date, required: true},
    Name: {type: String, required: true},
    Surname: {type: String, required: true},
    Gender:  {type: String, required: true},

}, {timestamps: true});


const personalInfo = mongoose.model('B2_Personal_Info', personalI);

module.exports = personalInfo;