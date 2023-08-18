import { propiedadesJSON } from "./data.js";

const cantidadCuartos = document.querySelector("#cantidad-cuartos");
const metrosMinimos = document.querySelector("#metros-min");
const metrosMaximos = document.querySelector("#metros-max");
const btnBuscar = document.querySelector("#buscar-propiedades");
const totalPropiedades = document.querySelector("#total-propiedades");
const renderPropiedades = document.querySelector("#prop");

const renderizarPropiedades = (propiedades) => {
  renderPropiedades.innerHTML = propiedades
    .map(
      (propiedad) => `
      <div class="propiedad">
        <div class="img" style="background-image: url('${propiedad.src}')"></div>
        <section>
          <h5>${propiedad.name}</h5>
          <div class="d-flex justify-content-between">
            <p>Cuartos: ${propiedad.rooms}</p>
            <p>Metros: ${propiedad.m}</p>
          </div>
          <p class="my-3">${propiedad.description}</p>
          <button class="btn btn-info">Ver más</button>
        </section>
      </div>
    `
    )
    .join("");
};

renderizarPropiedades(propiedadesJSON);

btnBuscar.addEventListener("click", () => {
  const cuartos = parseInt(cantidadCuartos.value);
  const metrosMin = parseInt(metrosMinimos.value);
  const metrosMax = parseInt(metrosMaximos.value);

  if (isNaN(cuartos) || isNaN(metrosMin) || isNaN(metrosMax)) {
    alert("Por favor, ingrese valores válidos en todos los campos");
    return;
  }

  const propiedadesFiltradas = propiedadesJSON.filter(
    (propiedad) =>
      propiedad.rooms === cuartos &&
      propiedad.m >= metrosMin &&
      propiedad.m <= metrosMax
  );

  renderizarPropiedades(propiedadesFiltradas);
  totalPropiedades.textContent = propiedadesFiltradas.length;
});
