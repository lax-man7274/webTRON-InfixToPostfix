const express = require("express");
const compression = require("compression");
const path = require("path");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const flash = require("connect-flash");

// const csrf = require('csurf');

const serverRoutes = require("./routes/serverRoutes");
const errorHandler = require("./middleware/errorHandler");
const mongoConnect = require("./utils/database").mongoConnection;

const app = express();

const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "mySessions",
});

app.use(compression());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
app.use(flash());
app.use(serverRoutes);

app.use(errorHandler.pageNotFoundError);
app.use(errorHandler.serverError);

mongoConnect(() => {
  app.listen(process.env.PORT || 4000, () => {
    console.log("listening to PORT: ", 4000);
  });
});
