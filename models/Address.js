const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    province: {type: String, required: true},
    municipality: {type: String, required: true},
    address: {type: String, required: false},
    
}, {timestamps: true});

const Blog = mongoose.model('Address', blogSchema);

module.exports = Blog;