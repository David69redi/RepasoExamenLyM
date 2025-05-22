// const objetoAlumnos = JSON.parse(localStorage.getItem("alumnos"));

// for (let alumno of objetoAlumnos) {
//   let alumnoNuevo = JSON.parse(alumno);
//   document.querySelector(
//     "#alumnos"
//   ).innerHTML += `<p>${alumnoNuevo.nombre}</p>`;
// }

window.addEventListener("load", () => {
  console.log(window.location);

  const pathName = window.location.pathname.split("/");
  const file = pathName[2]
  const casa= file.split(".")[0]

  console.log(casa)
  
  document.body.innerHTML = `
    <section>
      <h1 class="casa-title">Bienvenido a la casa de ${casa}</h1>
      <p>Esta es la casa de ${casa}</p>
      <button id="cambiar-tema">Cambiar tema</button>
    </section>
  `
  switch(casa) {
    case "gryffindor":
      document.body.classList.add("gryffindor");
      break;
    case "hufflepuff":
      document.body.classList.add("hufflepuff");
      break;
    case "slytherin":
      document.body.classList.add("slytherin");
      break;
    case "ravenclaw":
      document.body.classList.add("ravenclaw");
      break;
  }


  document.querySelector("#cambiar-tema").addEventListener("click", () => {
    document.body.className  = "gryffindor"
  });

});
