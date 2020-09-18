console.log("gastos desde js");



let y = document.getElementById("calc");
y.style.display = "none";


// Se inicializa como una variable global para ocuparla en varias funciones, sin tener datos al ser inicializada. 
let cantidad;
// Se usa let porq esta un un bloque de código y eso indica que se usa para un archivo exclusivo de app.js

function mostrar() {
    // con .value se recupera el valor que ingresa el usuario y comunicación de html a js
    // NOTA: Sino se recupera el elemento .value se recupera el elemento pero como etiqueta
    cantidad = document.getElementById("dinero").value;

    // Enviar datos al html con innerHTML Comunicación de js al html
    document.getElementById("cantidad").innerHTML = `$   ${cantidad}`;


    // console.log("entra a funcion mostrar");
    // Porq solo recuperamos la variable y no el valor, por eso no se pone el innHTML y el .value
    let x = document.getElementById("ingreso");

    // 3 signos de === es para comprobar
    // El elemento x en su estado inicioa en su atributo style y su propiedad display es igual a none?
    if (x.style.display == "none") {
        // Lo muestra en bloque al elemento x
        x.style.display = "block";
        // No lo muestra al elemento y 
        y.style.display = "none";
    } else {
        // No lo muestra al elemento x
        x.style.display = "none";
        // Lo muestra en bloque al elemento y
        y.style.display = "block";   
    }
}

// input = entrada de datos de diferente tipos de datos
// h2 = es una etiqueta de texto
// Los console.log nos ayudan a verificar que estamos mandando bien nyestros valores pero se deben de borrar o comentar una vez de verificar

function calcula() {
    console.log(cantidad);

    let renta = document.getElementById("renta").value;
    // console.log("renta ---> : ", renta);

    let servicios = document.getElementById("servicios").value;
    // console.log("Servicios: ", servicios);
   
    let total = cantidad - renta - servicios;
    // console.log("Total es de $:", total);

    // Esta es otra forma de hacer las operaciones:
    /* let suma = parseInt(renta) + parseInt(servicios);
    console.log(suma);
    let total = cantidad - suma;
    console.log(total);
    */

    document.getElementById("total").innerHTML = `Te sobran: $ ${total} pesos.`

    // IF para preguntar si tenemos dinero para los tacos

    // $80 pesos de tacos que gasto
    
    if (total >= 80) {
        // console.log("Si puedes ir por unos de pastor");
        Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: "Aún te alcanza para unos tacos de pastor",
            showConfirmButton: false,
            time: 1000
        });
    } else {
        // console.log("Te toca comer en casa"); 
        Swal.fire({
            // position: 'top-end',
            icon: 'error',
            title: "Te toca comer en casa",
            showConfirmButton: false,
            time: 1000
        }); 
    }  
}