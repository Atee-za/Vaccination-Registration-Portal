const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    age: {type: String, required: true},

}, {timestamps: true});

const Blog = mongoose.model('B0_Consent_Age', blogSchema);

module.exports = Blog;
