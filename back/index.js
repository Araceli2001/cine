require('dotenv').config();
const mongoose = require("mongoose");
const app = require("./src/server");
const dbCon = require("./src/config/conDb");
const PORT = process.env.PORT;

dbCon().then(() => {
    app.listen(PORT, () => console.log("servidor escuchando el puerto 3000"))
}).catch((err) => console.log("tenemos problemas con la coneccion de BDD"))

// dbCon().then(
//     res=>{
//         app.listen(3000, () => {
//             console.log("servidor escuchando el puerto 3000");
//         });
//     }
// )

// app.listen(3000, () => {
//     console.log("servidor escuchando el puerto 3000");
// });