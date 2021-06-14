const getDb = require('../utils/database').getDb;

module.exports = class subscriptionEmails {
    constructor(email) {
        this.email = email;
    }
    save() {
        const db = getDb();
        db.collection('subscriptionEmails').insertOne(this).then(result => {
        }).catch(err => {
            console.log(err);
        });
    }
}