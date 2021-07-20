const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navLinks');
  const navLinks = document.querySelectorAll('.navLinks li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('navActive');

  // link opacity
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
        link.style.animation = '';
    }else {
        link.style.animation = `navOpacity 0.5s ease forwards ${index / 7 + 0.7}s`
    }
    });
    //burger animation
    burger.classList.toggle('toggle')
  });
}

navSlide();
