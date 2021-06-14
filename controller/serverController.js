const split = require('../model/split');
const convertExpression = require('../model/infixToPostfixConverter');
const subscribeEmail = require('../model/subscriptionEmails');
const evaluatedExpressions = require('../model/evaluatedExpressions');
const mailSender = require('../utils/emailSender');

const dateTime=require('date-and-time');

// const flash = require('connect-flash');

exports.getIndex = (req, res, next) => {
    console.log('req message is:', req.flash('msg'));
    res.render('index', {
        pageTitle: 'Infix To Postfix conversion',
        infixExpresstion: '',
        splitMode: '',
        postfixExpression: '',
        isEvaluated: false,
        message: req.flash('msg')
    });
}

exports.getConvertToPostfix = (req, res, next) => {
    res.redirect('/');
}

exports.postConvertToPostfix = (req, res, next) => {
    console.log("req obj is:", req.connection.remoteAddress);
    const infixExpression = req.body.infixExpression;
    // const splitMode = req.body.splitMethode;
    const splittedExpression = split('(' + req.body.infixExpression + ')', 0);
    const postfixExpression = convertExpression(splittedExpression);
    const todaysDate = dateTime.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
    // console.log("the expressions are:", infixExpression, " - "," - ", splittedExpression, " - ", postfixExpression.join());
    const saveExpression = new evaluatedExpressions(req.connection.remoteAddress, infixExpression, splittedExpression, postfixExpression,todaysDate)
    saveExpression.save();
    //render to index page with the answer
    res.render('index', {
        pageTitle: 'Infix To Post Fix Converter',
        infixExpresstion: infixExpression,
        postfixExpression: postfixExpression.join(''),
        isEvaluated: true,
        message: ''
    });
}

exports.postSubscribe = (req, res, next) => {
    const email = req.body.subscriptionEmail;
    const subscribe = new subscribeEmail(email);
    subscribe.save();
    //send mail
    mailSender.sendMail(email, req, res);
    console.log("saved");
}