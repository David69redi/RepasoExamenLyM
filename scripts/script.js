const elementSelect = document.querySelector("#desplegableCasa");
const elementInputFecha = document.querySelector("#inputFecha");
const elementNavCasas = document.querySelector("#casas");
const elementFormulario = document.querySelector("#formulario");

const listaCasas = ["Griffyndor", "Slytherin", "Ravenclaw", "Hufflepuff"];
const arrayAlumnos = new Set();

window.addEventListener("load", () => {
  //Insertar casas en el desplegable id="#desplegableCasa"
  for (casa of listaCasas) {
    elementSelect.innerHTML += `<option value="${casa}">${casa}</option>`;
  }
  //Poner valor en el input date, la fecha actual
  const fechaActual = new Date();
  elementInputFecha.value = fechaActual.toISOString().split("T")[0];

  //Insertar casas en el nav id=#casas
  for (let casa of listaCasas) {
    elementNavCasas.innerHTML += ` <a href='./pages/${casa.toLowerCase()}.html'>${casa}</a>`;
  }
  if (localStorage.getItem("alumnos") == null) {
    return;
  }
  arrayAlumnos.add(localStorage.getItem("alumnos"));
});

elementFormulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Hace que no recargue la página

  //Crear objeto FormData para poder acceder al formulario (necesito el Elemento del Formulario)
  const formData = new FormData(elementFormulario);

  // Genera un objeto en base a los inputs (debido al atributo name) del formulario (necesita el objeto FormData)
  const datos = Object.fromEntries(formData);
  if (datos.nombre == null || datos.casa == null) {
    alert("NO FUNCIONA");
    return;
  }



  if (arrayAlumnos.has(datos)) {
    alert("NO FUNCIONA");
    return;
  }
  arrayAlumnos.add(datos);
  localStorage.setItem("alumnos", JSON.stringify(Array.from(arrayAlumnos)));
});

document.querySelector("#buttonBurguer").addEventListener("click", () => {
  elementNavCasas.classList.toggle("oculta");
});
