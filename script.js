const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle?.addEventListener('click', () => {
  nav?.classList.toggle('open');
});

const links = document.querySelectorAll('.nav a');
links.forEach((link) => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
  });
});
