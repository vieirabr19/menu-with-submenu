const aside = document.querySelector("aside");
const asideToggle = document.querySelector(".menu-icon");
const navItem = aside.querySelectorAll(".nav-item");

asideToggle.addEventListener("click", () => {
  aside.classList.toggle("expand");
});

navItem.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    } else {
      navItem.forEach((e) => e.classList.remove("active"));
      button.classList.add("active");
    }
  });
});

// for (let item of navItem) {
//   item.onclick = activeItem;
// }

// function activeItem() {
//   const item = Array.from(navItem);
//   item.forEach((e) => e.classList.remove("active"));
//   this.classList.add("active");
// }
