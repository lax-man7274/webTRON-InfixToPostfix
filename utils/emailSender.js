const nodeMailer = require('nodemailer');



module.exports = class mailSender {
    static sendMail(email) {
        const transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.AUTHOR_USER_ID,
                pass: process.env.AUTHOR_PASSWORD
            }
        });
        const mailOptions = {
            from: process.env.AUTHOR_USER_ID,
            to: email,
            subject: 'Successfully subscribed.',
            html: `<h1>Thank you for subscribing to our news letter.</h1>`
        };
        return transporter.sendMail(mailOptions);
    }
}