console.log('❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖');
console.log(' Game ');
console.log('❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖');

// Declarando y función buena
function respuesta(x) {
    // Se recupera la etiqueta del input del hidden
    let inputRespuestaCorrecta = document.getElementById(`respuesta${x}`);
    // console.log(inputRespuestaCorrecta);

    // recuperando el value del hidden
    let valorCorrecto = inputRespuestaCorrecta.getAttribute("value");

    // Se recupera la etiqueta input que se le muestra al usuario
    let inputValorUser = document.getElementById(`datoUser${x}`);
    // console.log(inputValorUser);

    // Recuepramos el valor que ingresa el usuario
    let valorUsuario = inputValorUser.value;

    // Se imprime en consola los valores que trae el imput hidden y el input usuario
    console.log(valorCorrecto, valorUsuario);

    // Validando datos
    if (!valorUsuario || valorUsuario > 9 || valorUsuario < 1) {
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Ingresa un número dentro del rango de respuestas',
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        console.log('el juego sigue');

        // == es para comparar igualdad 2 = 2
        // === es para comparar igualdad y tipo de dato " = 2"
        if (valorCorrecto === valorUsuario) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Felicidades acertaste',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Intenta una vez más',
                text: 'Error respuesta incorrecta',
                showConfirmButton: true
            });
            quitarVida();
        }
    }
};
// Invocando
// respuesta(1);

let jugador = {
    vidas: 0
}

function play() {
    jugador.vidas = 3;
    let asignarVidas = document.getElementById("vidas");
    asignarVidas.innerHTML = jugador.vidas;
}

play();

function quitarVida() {
    if (jugador.vidas <= 1) {
        console.log('opcion de reiniciar juego');
        // jugador.vidas = jugador.vidas -1;
        // Codigo pro
        jugador.vidas -= 1;
        let asignarVidas = document.getElementById("vidas");
        asignarVidas.innerHTML = jugador.vidas;
        Swal.fire({
            title: 'Quieres reiniciar el juego?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Sí`,
            denyButtonText: `No`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Reiniciaste el juego!', 'Suerte', 'success');
              play();
            } else if (result.isDenied) {
                Swal.fire({
                    title: 'Game Over',
                    text: 'Perdiste tus tres oportunidades',
                    imageUrl: 'https://cdn.pixabay.com/photo/2020/08/05/15/26/game-5465779_960_720.png',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  })
            }
          })
    } else {
        jugador.vidas -= 1;
        let asignarVidas = document.getElementById("vidas");
        asignarVidas.innerHTML = jugador.vidas;
    }

}

// quitarVida();



var totalChars = value.length;
console.log(totalChars);