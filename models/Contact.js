const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const contactI = new Schema({
    mobileNumber: {type: String, required: true},
    email: {type: String, required: false},
    
}, {timestamps: true});

const Blog3 = mongoose.model('Contact_Information', contactI);

module.exports = Blog3;