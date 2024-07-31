const express = require('express');
const router = require('./routes/index')
//middlewares
const morgan = require('morgan')
const cors = require('cors');
const movieRuta = require('./routes/movieRoute');

const app = express();
app.use(express.json())


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


app.use(router);
app.use("/peliRuta", movieRuta);

module.exports = app;
