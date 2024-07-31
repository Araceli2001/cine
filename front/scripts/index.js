const peliculas = require("./peliculas");
const axios = require('axios');

async function obtenerPeliculas() {
    try {
      const response = await axios.get('http://localhost:3000/peliRuta');
      return response.data;
    } catch (error) {
      console.error('Error al obtener las películas:', error);
      throw error;
    }
  }
  
  async function main() {
    try {
      const data = await obtenerPeliculas();
      // Llamar a la función 'peliculas' pasando los datos
      peliculas(data);
    } catch (error) {
      console.error('Error en la aplicación:', error);
    }
  }
  
  // Llamar a la función principal
  main();



















  
// $.get("https://students-api.2.us-1.fl0.io/movies", (data, status) => {
//     peliculas(data);
//     });
//https://students-api.up.railway.app/movies

// async function obtenerPeliculas() {
//     try {
//         const response = await axios.get("http://localhost:3000/peliRuta");
//         const peli = response.data;
//         peliculas(peli);
//     } catch (error) {
//         throw new Error(error);
//     }
// }

// obtenerPeliculas();


    // video index
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation")

    menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active")
    navigation.classList.toggle("active")
   });

