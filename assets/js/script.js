const openMenu = document.querySelector('.open');
const mobileMenu = document.querySelector('.navbar-mobile');
const closeMenu = document.querySelector('.close');

openMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  // document.body.style.backdropFilter = 'blur(10px)';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  document.body.style.overflow = 'auto';
});

(
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#fff';
      navbar.style.boxShadow = '0 0px 10px 0 #00000033';
    } else {
      navbar.style.backgroundColor = 'transparent';
      navbar.style.boxShadow = 'none';
    }
  })
);
