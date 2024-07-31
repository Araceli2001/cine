const axios = require('axios');

function clearForm() {
    console.log('limpiando entrando');
    document.getElementById("movieForm").reset();
}
const limpiar = document.getElementById("limpiar");
limpiar.addEventListener('click', clearForm);


async function validateForm(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let year = document.getElementById("year").value;
    let director = document.getElementById("director").value;
    let duration = document.getElementById("duration").value;
    let rate = document.getElementById("rate").value;
    let poster = document.getElementById("poster").value;

    let soloTextoExp = /^[a-zA-Z\s]+$/;
    let urlExp = /^https?:\/\/.*\.(png|jpe?g|gif)$/;

    let checkboxes = document.querySelectorAll('input[name="genero[]"]:checked');

    if (title === "" || isNaN(year) || director === "" || duration === "" || isNaN(rate) || poster === "" || !soloTextoExp.test(director) || !soloTextoExp.test(title) || !soloTextoExp.test(duration) || !urlExp.test(poster) || checkboxes.length === 0) {
                // Mostrar SweetAlert de error
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Falta algún campo o los datos son inválidos'
        });
    } else {

         movieData = {
            title: title,
            year: parseInt(year),
            director: director,
            duration: duration,
            rate: parseFloat(rate),
            poster: poster,
            genre: Array.from(checkboxes).map(checkbox => checkbox.value)
        };

        console.log(movieData);
        // console.log(JSON.stringify(movieData));

        try {
            const response = await axios.post('http://localhost:3000/movies', movieData);
            Swal.fire({
                icon: 'success',
                title: 'Película creada exitosamente',
                showConfirmButton: false,
                timer: 1500  // Cerrar automáticamente después de 1.5 segundos
            }).then(() => {
                window.location.href = '/';  // Redirigir después de que se cierre el SweetAlert
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error al crear la película',
                text: error.message
            });
        }
        
    }
}

const enviar = document.getElementById("enviar");
enviar.addEventListener('click', validateForm);






