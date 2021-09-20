const navButton = document.querySelector('.cv-nav-button');
const navList = document.querySelector('.cv-nav-list');
const navListItems = document.querySelectorAll('.cv-nav-list-item');

let isOpenedMenu = false;

navButton.addEventListener("click", () => {
  if (isOpenedMenu) {
    navButton.classList.add("cv-nav-button");
    navButton.classList.remove("cv-nav-button-close");
    navList.classList.add("cv-nav-list-closed");
    navListItems.forEach(item => item.classList.remove("cv-nav-list-item-active"));
  } else {
    navButton.classList.remove("cv-nav-button");
    navButton.classList.add("cv-nav-button-close");
    navList.classList.remove("cv-nav-list-closed");
  }
  isOpenedMenu = !isOpenedMenu;
});

navListItems.forEach(item => {
    item.addEventListener("click", () => {
        if (!item.classList.contains("cv-nav-list-item-active")) {
            navListItems.forEach(item => item.classList.remove("cv-nav-list-item-active"));
            item.classList.add("cv-nav-list-item-active");
        }
    });
})