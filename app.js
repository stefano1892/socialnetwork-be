const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const db = require("./models")

const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const updatePasswordRouter = require('./routes/updatePassword')

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

app.use('/api/updatePassword', updatePasswordRouter);


//******************* STOP ROUTING *************************

//app.get('/', (req, res) => {
//  res.send('Successful response.');
//});


db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`Server started on port ${PORT}.`));
})

module.exports = app;
