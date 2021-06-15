const split = require("../utils/split");
const convertExpression = require("../utils/infixToPostfixConverter");
const subscribeEmail = require("../model/subscriptionEmails");
const evaluatedExpressions = require("../model/evaluatedExpressions");
const mailSender = require("../utils/emailSender");
const { validationResult } = require("express-validator");

const dateTime = require("date-and-time");

// const flash = require('connect-flash');

exports.getIndex = (req, res, next) => {
  const errors = req.flash("errors");

  res.render("index", {
    pageTitle: "Infix To Postfix conversion",
    infixExpresstion: req.flash("infixExpression").toString(),
    splitMode: "",
    postfixExpression: req.flash("postfixExpression").join("").toString(),
    isEvaluated: true,
    message: req.flash("message"),
    flashMessages: errors,
  });
};

exports.getConvertToPostfix = (req, res, next) => {
  res.redirect("/");
};

exports.postConvertToPostfix = (req, res, next) => {
  const infixExpression = req.body.infixExpression;
  // const splitMode = req.body.splitMethode;
  const splittedExpression = split("(" + req.body.infixExpression + ")", 0);
  const postfixExpression = convertExpression(splittedExpression);
  const todaysDate = dateTime.format(new Date(), "YYYY/MM/DD HH:mm:ss");
  //render to index page with the answer
  req.flash("infixExpression", infixExpression);
  req.flash("postfixExpression", postfixExpression);
  res.redirect("/");
  const saveExpression = new evaluatedExpressions(
    req.connection.remoteAddress,
    infixExpression,
    splittedExpression,
    postfixExpression,
    todaysDate
  );
  saveExpression.save();
};

exports.postSubscribe = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    console.log("inside if");
    req.flash(
      "errors",
      errors.array().map((i) => i.msg)
    );
    return res.redirect("/");
  }
  const email = req.body.subscriptionEmail;
  subscribeEmail
    .findOneByEmail(email)
    .then((result) => {
      if (result) {
        req.flash("message", "Email already registered.");
        return res.redirect("/");
      }
      //send mail
      mailSender
        .sendMail(email)
        .then(() => {
          req.flash(
            "message",
            "Thank you for subscribing our newsletter. Please check your mail."
          );
          res.redirect("/");
        })
        .catch((err) => {
          console.log(err);
          req.flash("message", "Error sending mail");
          res.redirect("/");
        });
      subscribeEmail.saveOneEmail(email).then((result) => {
        console.log("email saved");
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatus = 500;
      next(err);
    });
};

exports.getSubscribe = (req, res, next) => {
  res.redirect("/");
};
