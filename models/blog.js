const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {type: String, required: true},
    name: {type: String, required: true},
    age: {type: String, required: true},

}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;


const step1Schema = new Schema({
    id: {type: String, required: true},
    passport: {type: String, required: false},
    RefugeeNum: {type: String, required: false},
}, {timestamps: true});


