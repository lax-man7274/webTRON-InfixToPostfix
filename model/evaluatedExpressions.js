const getDb = require('../utils/database').getDb;


module.exports = class evaluatedExpressions {
    constructor(ip, infix, splittedExpression, postfix,date) {
        this.ip = ip;
        this.infix = infix;
        this.splittedExpression = splittedExpression.toString();
        this.postfix = postfix.toString();
        this.date = date.toString();
    }
    save() {
        const db = getDb();
        db.collection('evaluatedExpressions').insertOne(this).then(result => {
            console.log('saved');
        }).catch(err => {
            const error = new Error(err);
            error.httpStatus = 500;
            next(err);
        });
    } 
}