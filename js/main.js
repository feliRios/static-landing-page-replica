// Necesarios para el navbar responsive

const menu = document.querySelector(".menu-hamburguesa");
menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  // Animacion del icono
  document.querySelector(".menu-linea1").classList.toggle("menu-linea1-active");
  document.querySelector(".menu-linea2").classList.toggle("menu-linea2-active");
  document.querySelector(".menu-linea3").classList.toggle("menu-linea3-active");

  const navbarResponsive = document.querySelector("#nv-responsive");
  navbarResponsive.classList.toggle("nv-show");
}
