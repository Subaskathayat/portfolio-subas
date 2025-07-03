window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const hero = document.querySelector('.hero');
  const scrollY = window.scrollY;
  const heroHeight = hero.offsetHeight;

  if (scrollY > heroHeight - 100) {
    navbar.classList.add('show');
  } else {
    navbar.classList.remove('show');
  }
});
