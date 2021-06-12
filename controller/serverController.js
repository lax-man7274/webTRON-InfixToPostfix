const split=require('../model/split');
const convertExpression=require('../model/infixToPostfixConverter');
const evaluate=require('../model/expressionEvaluator');



exports.getIndex = (req, res, next) => {
    res.render('index');
}

exports.postIndex=(req,res,next)=>{
    const infixExpression=req.body.infixExpression;
    const splitMode=req.body.splitMode;
    const splittedExpression=split(infixExpression,splitMode);
    const postfixExpression=convertExpression(splittedExpression);
    //render to index page with the answer
    res.render('index',{
        pageTitle:'Infix To Post Fix Converter',
        expresstion:infixExpression,
        splitMode:splitMode,
        evaluated:true
    })

}