require('dotenv').config();
const mongoose = require("mongoose");
const URI = process.env.URI;

//coneccion base de datos
const dbCon = async () => {
    await mongoose.connect(`${URI}`)
};

module.exports = dbCon;