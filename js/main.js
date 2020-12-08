let status = document.querySelector(".card-body-status-text");
let indicator = document.querySelector(".card-body-status-indicator");

if (status.textContent === "Alive") {
  indicator.classList.toggle("verde");
} else if (status.textContent === "Dead") {
  indicator.classList.toggle("rojo");
} else {
  indicator.classList.toggle("naranja");
}
