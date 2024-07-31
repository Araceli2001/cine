const tarjetas = document.getElementById('container-movies');
    tarjetas.style.display = 'flex';
    tarjetas.style.flexWrap = 'wrap'; 
    tarjetas.style.width = '100%';
    tarjetas.style.border = '1px solid #ccc';
    tarjetas.style.borderRadius = '10px';
    tarjetas.style.textAlign = 'center';
    tarjetas.style.justifyContent = 'space-around'; 
    tarjetas.style.margin = 'auto';
    tarjetas.style.padding = '10px';

const peliculas = (data) => {
    data.map(pelicula => {
        const tarjeta = document.createElement('div'); 
        tarjeta.style.width = '300px'; 
        tarjeta.style.marginBottom = '20px'; 

        const titulo = document.createElement('h3');
        titulo.textContent = pelicula.title;
        titulo.style.color = '#0cb7f2';
        titulo.style.marginTop = '10px';

        const foto = document.createElement('img');
        foto.src = pelicula.poster;
        foto.style.width = '100%'; 
        foto.style.height = 'auto';
        foto.style.display = 'block';
        foto.style.borderBottom = '1px solid #ccc';

        const information = document.createElement('div');
        information.style.padding = '8px';
        information.style.textAlign = 'left';

        const anio = document.createElement('p');
        anio.textContent = 'Year: ' + pelicula.year;
        anio.style.margin = '5px 0px';

        const name = document.createElement('p');
        name.textContent = 'Director: ' + pelicula.director;
        name.style.margin = '5px 0';

        const time = document.createElement('p');
        time.textContent = 'Duration: ' + pelicula.duration;
        time.style.margin = '5px 0px';

        const genn = document.createElement('p');
        genn.textContent = 'Genre: ' + pelicula.genre.join(', ');
        genn.style.margin = '5px 0px';

        const rat = document.createElement('p');
        rat.textContent = 'Rate: ' + pelicula.rate;
        rat.style.margin = '5px 0px';

        // Añadir elementos al contenedor de información
        information.appendChild(anio);
        information.appendChild(name);
        information.appendChild(time);
        information.appendChild(genn);
        information.appendChild(rat);
        // Añadir elementos al contenedor de la tarjeta
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(foto);
        tarjeta.appendChild(information);


        tarjetas.appendChild(tarjeta)
        });
        console.log("todas renderizadas correctamente");
    };   

module.exports = peliculas;       
     
    
    
 