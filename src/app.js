const express = require('express');
const app = express();

require("dotenv").config();

const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors());
app.use(require('./routes/users'));

module.exports = app;