const { Router } = require('express');
const {welcome} = require('../controllers/index');
//const moviesController = require('../controllers/moviesController');
const movieRuta = require('./movieRoute');



const router = Router()

router.get('/', welcome );
router.use('/movies', movieRuta);

module.exports = router;