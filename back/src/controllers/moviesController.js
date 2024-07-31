const movieService = require('../services/movieService');


module.exports = {
   getMovies: async (req, res) => {
        try {
            const peliculas = await movieService.getMovies(); // Debes usar await para esperar la respuesta del servicio
            res.status(200).json(peliculas);
        } catch (error) {
            console.error('Error al obtener las películas:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    },

    createMovie: async (req, res) => {
        try {
            const {title, year, director, duration, genre, rate, poster} = req.body;
            // console.log(title);
            const newMovie = await movieService.createMovie({title, year, director, duration, genre, rate, poster});
            res.status(201).json(newMovie);
            console.log("se creo correctamente");
        } catch (error) {
            res.status(500).json({
                error: "Error al crear movie",
            });
        }

    }
    
};

// async function obtenerTodasLasPeliculas(req, res) {
//     try {
//         const peliculas = await movieService.obtenerPeliculas(); // Debes usar await para esperar la respuesta del servicio
//         res.status(200).json(peliculas);
//     } catch (error) {
//         console.error('Error al obtener las películas:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     }
// }

// module.exports = {obtenerTodasLasPeliculas};

// module.exports = {
//     peliculas: async (req, res) => {
//         const movies = await movieService.peliculas();
//         res.status(200).json(movies);
//     }
// }

// function obtenerTodasLasPeliculas(req, res) {
//     try {
//         const peliculas = movieService.peliculas();
//         res.status(200).json(peliculas);

//     } catch (error) {
//         console.error('Error al obtener las películas:', error);
//         res.status(500).json({ error: 'Error interno del servidor' });
//     }
// }

// module.exports = {
//     obtenerTodasLasPeliculas
// };
