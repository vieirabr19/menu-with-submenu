const aside = document.querySelector("aside");
const asideToggle = document.querySelector(".menu-icon");
const navItem = aside.getElementsByClassName("nav-item");

asideToggle.addEventListener("click", () => {
  aside.classList.toggle("expand");
});

for (let item of navItem) {
  item.onclick = activeItem;
}

function activeItem() {
  const item = Array.from(navItem);
  item.forEach((e) => e.classList.remove("active"));
  this.classList.add("active");
}
