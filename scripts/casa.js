const objetoAlumnos = JSON.parse(localStorage.getItem("alumnos"));

for (let alumno of objetoAlumnos) {
  let alumnoNuevo = JSON.parse(alumno);
  document.querySelector("#alumnos").innerHTML += `<p>${alumnoNuevo.nombre}</p>`;
}
