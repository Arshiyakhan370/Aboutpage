function toggleMenu() {
  const smallNav = document.querySelector('.small-nav');
  const burgerMenu = document.querySelector('.burger-menu');

  smallNav.classList.toggle('open');
  burgerMenu.classList.toggle('open');

  
  if (smallNav.classList.contains('open')) {
    smallNav.style.display = "block";
  } else {
    smallNav.style.display = "none";
  }
}