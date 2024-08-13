const express = require('express');
const { checkCompatibility, getBloodGroups } = require('../controllers/bloodGroupController');
const bloodRouter = express.Router();

bloodRouter.get('/blood-groups',getBloodGroups);
bloodRouter.post('/check-compatibility',checkCompatibility);

module.exports = bloodRouter;