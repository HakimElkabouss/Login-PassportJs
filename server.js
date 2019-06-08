const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const User = require('./models/user');
const session = require('express-session');
var cookieParser = require('cookie-parser');
var passport=require('passport');
var passportConfig= require('./config/passport');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());

app.set('view engine', 'ejs');

app.use(passport.initialize());
app.use(passport.session());

app.use(session({
    secret: 'ygtyfitftyf',
    resave: false,
    saveUninitialized: true,
  }))

var indexRoutes = require('./config/routes/index');

app.use('/',indexRoutes);



// Connect to DB
mongoose.connect('mongodb://localhost/loginapp', { useNewUrlParser : true });
var db = mongoose.connection;
mongoose.set('useCreateIndex', true);







app.listen(3000, function(){
    console.log('Server is connected on port 3000');
});