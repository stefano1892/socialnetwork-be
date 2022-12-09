var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const db = require("./models")

var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');

var app = express();


//PORT CONFIG
const PORT = process.env.PORT || 3001;

//CONFIG BODY PARSER MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '50mb' }));

//******************* START ROUTING *************************

//LOGIN
app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);


//******************* STOP ROUTING *************************

//app.get('/', (req, res) => {
//  res.send('Successful response.');
//});

console.log(PORT)

db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`Server started on port ${PORT}.`));
})

module.exports = app;
