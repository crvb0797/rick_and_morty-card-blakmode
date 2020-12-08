function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
  const random = getRandom(1, 672);
  fetchData(random);
});

const fetchData = async (id) => {
  try {
    console.log(id);
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();
    console.log(data);
    const charter = {
      img: data.image,
      nombre: data.name,
      status: data.status,
      especie: data.species,
      genero: data.gender,
      locacion: data.location.name,
    };

    pintarCard(charter);
  } catch (error) {
    console.log(error);
  }
};

const pintarCard = (charter) => {
  const flex = document.querySelector(".flex");
  const template = document.getElementById("card").content;
  const clone = template.cloneNode(true);
  const fragment = document.createDocumentFragment();
  clone.querySelector(".card-body-img").setAttribute("src", charter.img);
  clone.querySelector(".card-body-title").innerHTML = `${charter.nombre}`;
  clone.querySelector(".card-body-status-text").textContent = charter.status;
  clone.querySelectorAll(".card-footer-info p")[0].textContent =
    charter.especie;
  clone.querySelectorAll(".card-footer-info p")[1].textContent = charter.genero;
  clone.querySelectorAll(".card-footer-info p")[2].textContent =
    charter.locacion;
  fragment.appendChild(clone);
  flex.appendChild(fragment);
  let indicator = document.querySelector(".card-body-status-indicator");

  if (charter.status === "Alive") {
    indicator.classList.toggle("verde");
  } else if (charter.status === "Dead") {
    indicator.classList.toggle("rojo");
  } else {
    indicator.classList.toggle("naranja");
  }
};
