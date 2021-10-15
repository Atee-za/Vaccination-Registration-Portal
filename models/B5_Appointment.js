const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    appointment: {type: String, required: true},
    session: {type: String, required: true},

}, {timestamps: true});

const Blog = mongoose.model('B5_Appointments', blogSchema);

module.exports = Blog;