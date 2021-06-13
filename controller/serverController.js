const split = require('../model/split');
const convertExpression = require('../model/infixToPostfixConverter');
const evaluate = require('../model/expressionEvaluator');



exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Infix To Postfix conversion',
        infixExpresstion: '',
        splitMode: '',
        postfixExpression: '',
        isEvaluated: false
    });
}

exports.getConvertToPostfix=(req,res,next)=>{
    res.redirect('/');
}

exports.postConvertToPostfix = (req, res, next) => {
    const infixExpression = req.body.infixExpression ;
    const splitMode = req.body.splitMethode;
    const splittedExpression = split('(' + req.body.infixExpression + ')', splitMode);
    const postfixExpression = convertExpression(splittedExpression);
    console.log("the expressions are:", infixExpression, " - ", splitMode, " - ", splittedExpression, " - ", postfixExpression.join());
   
    //render to index page with the answer
    res.render('index', {
        pageTitle: 'Infix To Post Fix Converter',
        infixExpresstion: infixExpression,
        splitMode: splitMode,
        postfixExpression: postfixExpression.join(''),
        isEvaluated: true
    });
}