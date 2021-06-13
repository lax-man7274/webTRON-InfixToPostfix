const express = require('express');
const router = express.Router();
const serverController = require('../controller/serverController');


router.get('/', serverController.getIndex);
router.post('/convert-infix-to-postfix', serverController.postConvertToPostfix);
router.get('/convert-infix-to-postfix', serverController.getConvertToPostfix);

module.exports = router;