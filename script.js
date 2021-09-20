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

const result = `
Результат: 150

+ 1. вёрстка валидная +10
+ 2. вёрстка семантическая +20
В коде страницы присутствуют семантические теги HTML5: article, figure, figcaption, footer, header, main, nav, section, используются заголовки h1-h3. Заголовок h1 на странице один.
+ 3. для оформления СV используются css-стили +10
+ 4. контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10
+ 5. вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10
+ 6. есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. Внешний вид адаптивного меню можно скопировать с макета музея +10
+ 7. на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10
+ 8. контакты для связи и перечень навыков оформлены в виде списка ul > li +10
+ 9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10
+ 10. CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10
+ 11. CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10
+ 12. CV выполнено на английском языке +10
+ 13. выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10
- 14. нет видеорезюме автора CV на английском языке 0
+ 15. дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию +10
`

console.log(result);