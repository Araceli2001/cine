const axios = require('axios');

const Movie = require('../models/Movie');


module.exports = {
  getMovies: async () => {
    try {
      const peliculas = await Movie.find();
      return peliculas;
    } catch (error) {
      console.error('Error al obtener las películas:', error);
      throw error;
    }
  },

  createMovie: async (movie) => {
    const newMovie = await Movie.create(movie);
  }
  
};