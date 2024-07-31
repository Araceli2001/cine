const validateMovie = (req, res, next) => {
    const {title, year, director, duration, genre, rate, poster} = req.body;
    
    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
       return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    } else if (isNaN(year) || year.toString().length !== 4) {
       return res.status(400).json({ error: 'El año debe ser un número de 4 dígitos.' });
    } else {
       next();
    }
};

module.exports = validateMovie;
