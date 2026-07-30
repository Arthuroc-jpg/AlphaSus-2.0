const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

const ejs = require('ejs');
//const expressLayouts = require('express-ejs-layouts');

//MIDDLEWARE
app.use(cookieParser());

app.use(session({
    secret: "S3cr3tK3y",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));


//ROTAS
indexRouter = require('./route/indexRoute');
alphaplusRouter = require('./route/alphaplusRoute');
loginRouter = require('./route/loginRoute');
creditosRouter = require('./route/creditosRoute');
gamesRouter = require('./route/gamesRoute');

app.set('view engine', 'ejs');
//app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); 

//CONF. DE VIEWS DO SERVER
app.use('/', indexRouter);
app.use('/alphaplus', alphaplusRouter);
app.use('/login', loginRouter);
app.use('/creditos', creditosRouter);
app.use('/games',gamesRouter);

app.listen(5000, () => {
    console.log('AlphaSus On');
})