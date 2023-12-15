function toggleMenu() {
  const body = document.body;
  const smallNav = document.querySelector('.small-nav');
  const burgerMenu = document.querySelector('.burger-menu');

  smallNav.classList.toggle('open');
  burgerMenu.classList.toggle('open');

  if (smallNav.classList.contains('open')) {
    smallNav.style.display = "block";
    body.style.overflow = "hidden"; 
  } else {
    smallNav.style.display = "none";
    body.style.overflow = "auto"; 
  }
}