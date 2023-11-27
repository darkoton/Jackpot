//< " ПОДКЛЮЧЕНИЕ JS КОМПОНЕНТОВ " >=============================================================================================================>//
/* @@include("./chunks/my-dynamic_adap.js"); // ДИНАМИЧЕСКИЙ АДАПТИВ */

/* @@include("./chunks/my-scroll_header.js"); // ДОБАВЛЕНИЕ ХЕДЕРУ КЛАСС ПРИ СКРОЛЛЕ */

/* @@include("./chunks/my-swiper.js"); // НАСТРОЙКИ СЛАЙДЕРА */

/* @@include("./chunks/my-quantity.js"); // СЧЁТЧИКИ */

/* @@include("./chunks/my-spoiler.js"); // СПОЙЛЕРЫ */

/* @@include("./chunks/my-popup.js"); // ПОПАПЫ */

@@include("./chunks/my-timer.js"); // ТАЙМЕР 

@@include("./chunks/my-calculator.js"); // КАЛЬКУЛЯТОР 

@@include("./chunks/my-animate_scroll.js"); // КАЛЬКУЛЯТОР 

//< " СКРИПТЫ " >=============================================================================================================>//

let isMobile = {
  Android: function () { return navigator.userAgent.match(/Android/i); },
  BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
  iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
  Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
  Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
  any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

if (isMobile.any()) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.add("_pc");
}

//< " СКРИПТЫ " >=============================================================================================================>//
new WOW({
  animateClass: '_animate',
  offset: 0
}).init();

const timer = new Timer({
  body: ".main__left"
})