// ===== ELEMENTOS =====
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const menuLinks = sideMenu.querySelectorAll("a");

// ===== FUNÇÕES =====
function openMenu() {
  sideMenu.classList.add("open");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden"; // trava o scroll
}

function closeMenu() {
  sideMenu.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style.overflow = ""; // libera o scroll
}

// ===== EVENTOS =====
menuBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

// Fecha o menu ao clicar em qualquer link
menuLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

// Fecha com ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
