const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    province: {type: String, required: true},
    municipality: {type: String, required: true},
    Address: {type: String, required: true},
    
}, {timestamps: true});

const Blog = mongoose.model('B4_Address', blogSchema);

module.exports = Blog;