const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const contactI = new Schema({
    mobileNumber: {type: String, required: true},
    email: {type: String, required: false},
    
}, {timestamps: true});

const Blog3 = mongoose.model('B3_Contact_Info', contactI);

module.exports = Blog3;