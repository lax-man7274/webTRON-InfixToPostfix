const express = require('express');
const {body}=require('express-validator');
const router = express.Router();
const serverController = require('../controller/serverController');


router.get('/', serverController.getIndex);
router.post('/convert-infix-to-postfix', serverController.postConvertToPostfix);
router.get('/convert-infix-to-postfix', serverController.getConvertToPostfix);
router.post('/subscribe', body('subscriptionEmail').notEmpty().isEmail().trim().withMessage('Invalid Email.'),serverController.postSubscribe);
router.get('/subscribe', serverController.getSubscribe);

module.exports = router;