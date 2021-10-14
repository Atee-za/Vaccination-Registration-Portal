const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    Medical_Aid: {type: String, required: true},

}, {timestamps: true});

const Blog = mongoose.model('B6_Aid', blogSchema);

module.exports = Blog;