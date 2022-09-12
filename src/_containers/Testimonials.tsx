import React from "react";

const Testimonials = () => {
    return <div>Testimonials</div>;
};

export default Testimonials;

// if (document.querySelector(".benefits__swiper")) {
//     new Swiper(".benefits__swiper", {
//         // Эффекты переключения слайдов.
//         // Листание
//         effect: "slide",

//         /*// Эффекты переключения слайдов.
// 		// Cмена прозрачности
// 		effect: 'fade',
// 		// Дополнение к fade
// 		fadeEffect: {
// 			// Параллельная
// 			// смена прозрачности
// 			crossFade: true
// 		},*/

//         // Arrows
//         navigation: {
//             nextEl: ".benefits .navigation__arrow_next",
//             prevEl: ".benefits .navigation__arrow_prev",
//         },

//         observer: true,
//         observeParents: true,
//         // Количество слайдов для показа
//         slidesPerView: 1,
//         // Отступ между слайдами
//         spaceBetween: 0,
//         // Автовысота
//         autoHeight: false,
//         // Отключение функционала
//         // если слайдов меньше чем нужно
//         watchOverflow: true,
//         adaptiveHeight: true,

//         pagination: {
//             el: ".benefits .navigation__pagging",

//             // Буллеты
//             type: "bullets",
//             clickable: true,
//             // Фракция
//             type: "fraction",
//             // Кастомный вывод фракции
//             renderFraction: function (currentClass, totalClass) {
//                 return (
//                     '<span class="navigation__fraction ' +
//                     currentClass +
//                     '"></span>' +
//                     "/" +
//                     '<span class="navigation__fraction ' +
//                     totalClass +
//                     '"></span>'
//                 );
//             },
//         },

//         parallax: false,
//         // Включение/отключение
//         // перетаскивания на ПК
//         simulateTouch: true,
//         // Чувствительность свайпа
//         touchRatio: 1,

//         // Угол срабатывания свайпа/перетаскивания
//         touchAngle: 45,
//         // Курсор перетаскивания
//         grabCursor: true,
//         // Переключение при клике на слайд
//         slideToClickedSlide: false,

//         // Навигация по хешу
//         hashNavigation: {
//             // Отслеживать состояние
//             watchState: true,
//         },

//         // Управление клавиатурой
//         keyboard: {
//             // Включить\выключить
//             enabled: true,
//             // Включить\выключить
//             // только когда слайдер
//             // в пределах вьюпорта
//             onlyInViewport: true,
//             // Включить\выключить
//             // управление клавишами
//             // pageUp, pageDown
//             pageUpDown: true,
//         },
//         // Количество пролистываемых слайдов
//         slidesPerGroup: 1,

//         // Активный слайд по центру
//         centeredSlides: false,

//         // Стартовый слайд.
//         initialSlide: 0,

//         // Мультирядность
//         slidesPerColumn: 1,

//         // Бесконечный слайдер
//         loop: true,

//         // Кол-во дублирующих слайдов
//         loopedSlides: 0,

//         // Свободный режим
//         freeMode: false,

//         // Автопрокрутка
//         /*
// 		autoplay: {
// 			// Пауза между прокруткой
// 			delay: 1000,
// 			// Закончить на последнем слайде
// 			stopOnLastSlide: true,
// 			// Отключить после ручного переключения
// 			disableOnInteraction: false
// 		},
// 		*/

//         // Скорость
//         speed: 800,

//         // Вертикальный слайдер
//         direction: "horizontal", //'vertical'

//         // Отключить предзагрузка картинок
//         preloadImages: false,
//         // Lazy Loading
//         // (подгрузка картинок)

//         lazy: {
//             // Подгружать на старте
//             // переключения слайда
//             loadOnTransitionStart: false,

//             // Подгрузить предыдущую
//             // и следующую картинки
//             loadPrevNext: false,
//         },

//         // Слежка за видимыми слайдами
//         watchSlidesProgress: false,

//         // Добавление класса видимым слайдам
//         watchSlidesVisibility: false,
//         /*

// 		// Зум картинки
// 		zoom: {
// 			// Макимальное увеличение
// 			maxRatio: 5,
// 			// Минимальное увеличение
// 			minRatio: 1,
// 		},
// 		*/

//         // Миниатюры (превью)
//         /*
// 		thumbs: {
// 			// Свайпер с мениатюрами
// 			// и его настройки
// 			swiper: {
// 				el: '.image-mini-slider',
// 				slidesPerView: 5,
// 			}
// 		},
// 		*/

//         /*
// 		// Передача управления
// 		controller: {
// 			control: myTextSlider
// 		},
// 		*/

//         /*
// 			// Обновить свайпер
// 			// при изменении элементов слайдера
// 			observer: true,
// 			// Обновить свайпер
// 			// при изменении родительских
// 			// элементов слайдера
// 			observeParents: true,
// 			// Обновить свайпер
// 			// при изменении дочерних
// 			// элементов слайда
// 			observeSlideChildren: true,
// 		*/

//         /*
// 			// Управление колесом мыши
// 			mousewheel: {
// 				// Чувствительность колеса мыши
// 				sensitivity: 0,
// 				// Класс объекта на котором
// 				// будет срабатывать прокрутка мышью.
// 				//eventsTarget: ".image-slider"
// 			},
// 		*/

//         /*
// 		breakpoints: {
// 			320: {
// 				slidesPerView: 1,
// 				spaceBetween: 0,
// 				autoHeight: true,
// 			},
// 			768: {
// 				slidesPerView: 2,
// 				spaceBetween: 20,
// 			},
// 			992: {
// 				slidesPerView: 3,
// 				spaceBetween: 20,
// 			},
// 			1268: {
// 				slidesPerView: 4,
// 				spaceBetween: 30,
// 			},
// 		},
// 		*/
//         on: {
//             lazyImageReady: function () {
//                 ibg();
//             },
//         },
//     });
// }
// if (document.querySelector(".testi__swiper")) {
//     new Swiper(".testi__swiper", {
//         // Эффекты переключения слайдов.
//         // Листание

//         effect: "fade",
//         // Дополнение к fade

//         // Arrows
//         navigation: {
//             nextEl: ".testi .testi__arrow_next",
//             prevEl: ".testi .testi__arrow_prev",
//         },

//         observer: true,
//         observeParents: true,
//         // Количество слайдов для показа
//         slidesPerView: 1,
//         // Отступ между слайдами
//         spaceBetween: 0,
//         // Автовысота
//         autoHeight: true,
//         // Отключение функционала
//         // если слайдов меньше чем нужно
//         watchOverflow: true,
//         adaptiveHeight: true,

//         parallax: false,
//         // Включение/отключение
//         // перетаскивания на ПК
//         simulateTouch: false,
//         // Чувствительность свайпа
//         touchRatio: 1,

//         // Угол срабатывания свайпа/перетаскивания
//         touchAngle: 45,
//         // Курсор перетаскивания
//         grabCursor: false,
//         // Переключение при клике на слайд
//         slideToClickedSlide: false,

//         // Навигация по хешу
//         hashNavigation: {
//             // Отслеживать состояние
//             watchState: true,
//         },
//         loop: true,

//         // Управление клавиатурой
//         keyboard: {
//             // Включить\выключить
//             enabled: true,
//             // Включить\выключить
//             // только когда слайдер
//             // в пределах вьюпорта
//             onlyInViewport: true,
//             // Включить\выключить
//             // управление клавишами
//             // pageUp, pageDown
//             pageUpDown: true,
//         },
//         // Количество пролистываемых слайдов
//         slidesPerGroup: 1,

//         // Активный слайд по центру
//         centeredSlides: false,

//         // Стартовый слайд.
//         initialSlide: 0,

//         // Мультирядность
//         slidesPerColumn: 1,

//         // Бесконечный слайдер

//         // Кол-во дублирующих слайдов
//         loopedSlides: 0,

//         // Скорость
//         speed: 800,

//         // Вертикальный слайдер
//         direction: "horizontal", //'vertical'

//         // Отключить предзагрузка картинок
//         preloadImages: false,
//         // Lazy Loading
//         // (подгрузка картинок)

//         lazy: {
//             // Подгружать на старте
//             // переключения слайда
//             loadOnTransitionStart: false,

//             // Подгрузить предыдущую
//             // и следующую картинки
//             loadPrevNext: false,
//         },

//         // Слежка за видимыми слайдами
//         watchSlidesProgress: false,

//         // Добавление класса видимым слайдам
//         watchSlidesVisibility: false,
//     });
// }
