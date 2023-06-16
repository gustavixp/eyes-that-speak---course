const hamb = document.querySelector('.hamb');
const nav = document.querySelector('.nav');

hamb.addEventListener('click', () => {
  nav.classList.toggle('active');
})

document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !hamb.contains(e.target)) {
    nav.classList.remove('active');
  }
})