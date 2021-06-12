const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const serverRoutes = require('./routes/serverRoutes');

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


app.use((error,req,res,next)=>{
    res.render('error/500',{
        pagrTitle:"Error!"
    });
})
// const PORT=process.env.PORT || 4000;
app.listen(4000, () => {
    console.log('listening to PORT: ', 4000);
})