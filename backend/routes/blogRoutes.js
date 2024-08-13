const express = require('express');
const blogRouter = express.Router();

// routes for blog
blogRouter.get('/', );
blogRouter.get('/:id');
blogRouter.post('/create');
blogRouter.put('/:id');
blogRouter.delete('/:id');

module.exports = blogRouter;
