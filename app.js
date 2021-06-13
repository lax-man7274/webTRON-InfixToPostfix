const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const csrf = require('csurf');

const serverRoutes = require('./routes/serverRoutes');
const errorHandler = require('./controller/serverController');

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(serverRoutes);


// app.use(errorHandler.pageNotFoundError);
// app.use(errorHandler.serverError);
// const PORT=process.env.PORT || 4000;
app.listen(4000, () => {
    console.log('listening to PORT: ', 4000);
})