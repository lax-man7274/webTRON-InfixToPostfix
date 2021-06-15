const getDb = require("../utils/database").getDb;

module.exports = class subscriptionEmails {
    static saveOneEmail(email) {
        const db = getDb();
        return db.collection("subscriptionEmails")
            .insertOne({
                email: email,
            });
    }

    static findOneByEmail(email) {
        const db = getDb();
        return db.collection("subscriptionEmails").findOne({
            email: email,
        });
    }
};