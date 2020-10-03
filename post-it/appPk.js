let remember = ["Estudiar", "Practicar", "Leer", "Trabajar"];

/* CREATE */
function crear() {
  let recordatoriosDesdeDOM = document.getElementById("actividad").value;

  if (recordatoriosDesdeDOM != "") {
    remember.push(recordatoriosDesdeDOM);
    leer();
    document.getElementById("actividad").value = "";

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "¡Tu recordatorio se creó correctamente!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ingresa un recordatorio",
    });
  }

  leer();
}

// READ
function leer() {
  document.getElementById("caja-cartas").innerHTML = `
  <div class="row" id="fila">

  </div>  `;

  let row = document.getElementById("fila");

  for (let index = 0; index < remember.length; index++) {
    const element = remember[index];
    
    let cartaPadre = document.createElement("div");
    let cartaHijo = document.createElement("div");
    let texto = document.createElement("h4");
    let contenido = document.createTextNode(element);
    
    row.appendChild(cartaPadre);
    cartaPadre.appendChild(cartaHijo);
    cartaHijo.appendChild(texto);
    texto.appendChild(contenido);

    cartaPadre.classList.add("col-sm-12");
    cartaPadre.classList.add("col-md-5");
    cartaPadre.classList.add("col-lg-3");
    cartaHijo.classList.add("card");
    cartaHijo.classList.add("rounded");
    cartaHijo.classList.add("bg-warning");
    cartaHijo.classList.add("text-black");
    cartaHijo.classList.add("ml-1");
    cartaHijo.classList.add("mx-auto");
    cartaHijo.classList.add("mt-3");
    cartaHijo.classList.add("shadow-lg");
    texto.classList.add("m-auto");
    
    let cajaBotones = document.createElement("div");
    let boton = document.createElement("button");
    let botonBorrar = document.createElement("button");
    // Icono Boton Editar
    let iconEditar = document.createElement("i");
    // Icono Boton Borrar
    let iconBorrar = document.createElement("i");

    cartaHijo.appendChild(cajaBotones);
    cajaBotones.appendChild(boton);
    cajaBotones.appendChild(botonBorrar);
    boton.appendChild(iconEditar);
    botonBorrar.appendChild(iconBorrar);
    
    cajaBotones.classList.add("row");
    cajaBotones.classList.add("mx-auto");
    cajaBotones.classList.add("py-3");
    boton.classList.add("btn");
    boton.classList.add("btn-info");
    boton.classList.add("m-1");
    botonBorrar.classList.add("btn");
    botonBorrar.classList.add("btn-danger");
    botonBorrar.classList.add("m-1");
    iconEditar.classList.add("fa");
    iconEditar.classList.add("fa-pencil-square-o");
    iconBorrar.classList.add("fa");
    iconBorrar.classList.add("fa-trash-o");

    boton.setAttribute("onclick", `editar('${element}')`);
    botonBorrar.setAttribute("onclick", `borrar('${element}')`);
  }
}

leer();

// PRE-UPDATE
function editar(element) {
  let botonCrear = document.getElementById("add");
  botonCrear.style.display = "none";

  let cajaBotones = document.getElementById("caja-botones");

  cajaBotones.innerHTML = `<button type="button" class="btn btn-danger float-right" onclick="cerrar()" id="cancelar">Cancelar</button> <button type="button" class="btn btn-warning float-right" onclick="update('${element}')" id="actualizar">Actualizar</button>`;

  cajaBotones.style.display = "block";

  document.getElementById("actividad").value = element;
}

// UPDATE
function update(element) {
  let index = remember.indexOf(element);

  let recordatoriosActualizadosDesdeDOM = document.getElementById("actividad")
    .value;

  remember[index] = recordatoriosActualizadosDesdeDOM;

  cerrar();
  leer();

  Swal.fire({
    position: "top-end",
    icon: "info",
    title: "Tu recordatorio fue actualizado",
    showConfirmButton: false,
    timer: 1500,
  });
}

function cerrar() {
  let botonCrear = document.getElementById("add");
  botonCrear.style.display = "block";

  let cajaBotones = document.getElementById("caja-botones");
  cajaBotones.style.display = "none";

  document.getElementById("actividad").value = "";
}

// DELETE
function borrar(element) {
  // let opc = confirm("Seguro que deseas borrar?");

  Swal.fire({
    title: "¿Seguro quieres borrar el recordatorio?",
    showDenyButton: true,
    confirmButtonText: `Si`,
    denyButtonText: `No`,
  }).then((result) => {
    if (result.isConfirmed) {
      let index = remember.indexOf(element);
      remember.splice(index, 1);
      leer();
      Swal.fire("Se eliminó el recordatorio de forma correcta");
    }
  });
}
