const mongoose = require('mongoose');

const BlogShema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    date: String,
    image: String,
    comments: [{}],
    likes: Number,
    dislikes: Number,
    views: Number,
    tags: [String]
})

const Blog = mongoose.model('Blog', BlogShema);
module.exports = Blog;