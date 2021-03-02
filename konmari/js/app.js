console.log('⇴⇴⇴⇴⇴');
console.log(' konmari');
console.log('⇴⇴⇴⇴⇴');

// alert("¡¡Bienvenidas Mujeres Emprendedoras!!");

// Swal.fire('¡¡Bienvenidas Mujeres Emprendedoras!!')

/* Swal.fire({
    title: 'Bienvenidas Mujeres Emprendedoras',
    imageUrl: 'https://image.freepik.com/vector-gratis/grupo-personas-posando-saludando_23-2148466510.jpg',
    imageHeight: 300,
    imageAlt: 'personas',
    showConfirmButton: false,
    background: '#FFE4C4',
    }); */


// var nombre = prompt("¿Cómo te llamas?");
// console.log("Bienvenido a Konmari", nombre);

// document.getElementById("hola").innerText = `Bienvenido a Konmari ${nombre}`;

function saludar() {
    // Forma nativa 
    /* 
    alert("Bienvenidas Mujeres Emprendedoras")
    */
    console.log('entro');
    // forma customatizada más estilo con sweetalert
    Swal.fire({
        title: 'Bienvenidas Mujeres Emprendedoras',
        imageUrl: 'https://image.freepik.com/vector-gratis/grupo-personas-posando-saludando_23-2148466510.jpg',
        imageHeight: 300,
        imageAlt: 'personas',
        showConfirmButton: false,
        background: '#FFE4C4',
    });
}

// Forma con más estilo con sweetAlert en vez del prompt
Swal.mixin({
    input: 'text',
    confirmButtonText: 'Next &rarr;',
    showCancelButton: false,
    // progressSteps -->cuantas preguntas se deben de hacer para que lo visualice el usuario
    progressSteps: ['1']
}).queue([
    {
        title: 'Ingresa tu nombre'
    }
]).then((result) => {
    if (result.value) {
        const nombre = result.value
        Swal.fire({
            title: 'Bienvenido a Konmari',
            icon: 'success',
            text: nombre,
            /*  html: `
               <pre><code>${answers}</code></pre>
             `, */
            timer: 3000,
            // Este sirve para que no aparezca ningun botón de confirmación
            showConfirmButton: false
        })
        document.getElementById("hola").innerText = `Bienvenido a Konmari ${nombre}`;
    }
});



function info() {
    // *************************************
    //  Forma nativa del confirm
    // **************************************

    // console.log('entrando a funcion info');

    // var res = confirm('¿Deseas saber acerca de la autonomía de las mujeres?');
    // console.log(res);

    // if (res) {
    //     alert("Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus beatae odio error quo ipsam fuga perferendis explicabo? Quos quod nemo necessitatibus nam minima quidem magni? Aut molestiae quidem totam earum delectus ullam ad, inventore, sit mollitia hic deleniti velit corrupti distinctio accusamus laboriosam a maxime repudiandae necessitatibus perferendis nam.");
    // }

    Swal.fire({
        title: '¿Deseas saber acerca de la autonomía de las mujeres?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#40E0D0',
        cancelButtonColor: '#FA8072',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                position: 'top-start',
                icon: 'success',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus beatae odio error quo ipsam fuga perferendis explicabo? Quos quod nemo necessitatibus nam minima quidem magni? Aut molestiae quidem totam earum delectus ullam ad, inventore, sit mollitia hic deleniti velit corrupti distinctio accusamus laboriosam a maxime repudiandae necessitatibus perferendis nam.',
                showConfirmButton: true
            })
        }
    })
}








