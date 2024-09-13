$(document).ready(function () {
    let carouselSelector = ".owl-carousel";

    $(carouselSelector).each(function () {
        let owl = $(this);

        owl.owlCarousel({
            items: 3,
            mouseDrag: true,
            touchDrag: true,
            touchSwipe: true,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoPlayTimeout: 1000,
            smartSpeed: 800, // Увеличьте время для плавности перехода
            autoplaySpeed: 800, 
        });


        owl.trigger('play.owl.autoplay', [1500]);
    });

    let isSlideshowActive = false;

    // Показываем логотип и карусель с эффектом подъема
    $('.img_logo').addClass('visible'); // Логотип
    $('.slideshow').addClass('visible'); // Карусель

    // Запускаем переход через 2 секунды (или по событию)
    setTimeout(function () {
        $('.img_logo').addClass('fade-out'); // Уменьшаем видимость логотипа
        $('.slideshow').addClass('active'); // Показываем карусель
    }, 2000); // Измените время по необходимости

    // Обработка прокрутки назад
    $(window).on('scroll', function () {
        if ($(this).scrollTop() < 100 && isSlideshowActive) { // Если прокрутка вверх и карусель остановлена
            $('.img_logo').removeClass('fade-out').addClass('visible'); // Восстанавливаем логотип
            $('.slideshow').removeClass('active'); // Скрываем карусель
            isSlideshowActive = false; // Сбрасываем флаг
        }
    });
});