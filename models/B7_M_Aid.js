const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    Medical_Aid_Scheme: {type: String, required: true},
    Medical_Aid_Number: {type: String, required: true},
    
}, {timestamps: true});

const Blog = mongoose.model('B7_Medical_Aid', blogSchema);

module.exports = Blog;