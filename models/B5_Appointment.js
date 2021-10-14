const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    weekdays: {type: Boolean, required: true},
    morning: {type: Boolean, required: true},

}, {timestamps: true});

const Blog = mongoose.model('B5_Appointments', blogSchema);

module.exports = Blog;