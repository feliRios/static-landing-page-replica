// Necesarios para el navbar responsive

window.addEventListener('load', () => {
  const width = window.innerWidth;
  const navbar = document.querySelector('.navbar-options');
  if (width <= 1125) {
    navbar.innerHTML = `
                        <div class="menu-hamburguesa">
                        <span class="menu-linea1 menu-linea"></span>
                        <span class="menu-linea2 menu-linea"></span>
                        <span class="menu-linea3 menu-linea"></span>
                        </div>
                       `
    const menu = document.querySelector('.menu-hamburguesa');
    menu.addEventListener('click', toggleMenu);

    function toggleMenu() {
      document.querySelector('.menu-linea1').classList.toggle('menu-linea1-active');
      document.querySelector('.menu-linea2').classList.toggle('menu-linea2-active');
      document.querySelector('.menu-linea3').classList.toggle('menu-linea3-active');
    }
  } else {
    navbar.innerHTML = `
                      <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Apps & Services</a></li>
                        <li><a href="#">Enterprise</a></li>
                        <li><a href="#">OEM</a></li>
                        <li><a href="#">Help & Tutorials</a></li>
                        <li><a href="#">Sign In</a></li>
                        <li class="sign-up"><a href="" style="text-decoration: none; color: rgba(1,104,163,1);">Sign Up</a></li>
                      </ul>
                       `
  }
});