var express = require('express');
var gptController = require('../controllers/gptController');

const router = express.Router();

router.post('/gpt', gptController.getNumberByEmotion);
router.post('/gpt_dream', gptController.getNumberByDream);

module.exports = router;