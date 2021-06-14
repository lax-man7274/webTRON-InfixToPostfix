const nodeMailer = require('nodemailer');



module.exports = class mailSender {
    static sendMail(email,req,res) {
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
        transporter.sendMail(mailOptions).then(() => {
            req.flash('msg','Thankyou for subscribing our newsletter. Please check your mail.');
            // console.log(req.flash('msg'));
            console.log('session is',req.session);
            res.redirect('/');
            console.log('sent');
        }).catch(err => {
            console.log(err);
            req.flash('msg','Error sending mail');
            res.redirect('/');
        });
    }
}