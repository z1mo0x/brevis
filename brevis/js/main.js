const burgerButton = document.querySelector('.burger-menu__button');
const burgerMenu = document.querySelector('.burger-menu');
const burgerCloseButton = document.querySelector('.burger-menu__close');
const upButton = document.querySelector('.up-button');

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-active');
})

burgerCloseButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-active');
});

window.addEventListener('DOMContentLoaded', () => {
    if (window.scrollY < 300) {
        upButton.style.display = 'none';
    } else {
        upButton.style.display = 'block';
    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY < 300) {
        upButton.style.display = 'none';
    } else {
        upButton.style.display = 'block';
    }
})

upButton.onclick = () => {
    window.scrollTo(0, 0);
}

const competenceSwiper = new Swiper('.competence__slider', {
    loop: true,
    slidesPerView: 5,
    pagination: {
        el: '.competence-pagination'
    },

    navigation: {
        nextEl: '.competence__slider-next',
        prevEl: '.competence__slider-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        993: {
            slidesPerView: 5,
        }
    }

});

const practiceSwiper = new Swiper('.practice__slider', {
    loop: true,
    slidesPerView: 5,
    pagination: {
        el: '.practice-pagination'
    },

    navigation: {
        nextEl: '.practice__slider-next',
        prevEl: '.practice__slider-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        993: {
            slidesPerView: 5,
        }
    }

});