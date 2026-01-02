const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("open");
});

sideMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("open");
  });
});
