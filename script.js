function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

faders.forEach(el => observer.observe(el));

