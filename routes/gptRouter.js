var express = require('express');
var gptController = require('../controllers/gptController');

const router = express.Router();

router.post('/gpt', gptController.getNumbers);

module.exports = router;