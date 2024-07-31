const { Router } = require('express')
const {getMovies} = require('../controllers/moviesController');
const { createMovie } = require('../controllers/moviesController');
const validateMovie = require('../middlewares/validateMovie');


const movieRuta = Router();
movieRuta.get("/", getMovies);
movieRuta.post("/", validateMovie, createMovie);

module.exports = movieRuta;