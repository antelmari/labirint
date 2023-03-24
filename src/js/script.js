// адаптация слайдера
var swiper = new Swiper(".products__slider", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 100
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 27
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 10
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 55
        },
        1536: {
            slidesPerView: 6,
            spaceBetween: 24
        }
    }
});

// переключение класса активности у кнопок
const buttons = document.querySelectorAll('.products-card__btn');
buttons.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('products-card__btn--active')) {
            item.classList.remove('products-card__btn--active');
        } else {
            item.classList.add('products-card__btn--active');
        }
    });
});

// переключение метки "избранное" у карточки
const hearts = document.querySelectorAll('.products-card-cover__heart');
const heartsActive = document.querySelectorAll('.products-card-cover__heart--active');
hearts.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('products-card-cover__heart--show')) {
            item.classList.remove('products-card-cover__heart--show');
            heartsActive[i].classList.add('products-card-cover__heart--show');
        } else {
            item.classList.add('products-card-cover__heart--show');
            heartsActive[i].classList.remove('products-card-cover__heart--show');
        }
    });
});