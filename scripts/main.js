document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();


            links.forEach(link => link.classList.remove('active'));

            this.classList.add('active');
            document.querySelectorAll(`a[href="${this.getAttribute('href')}"]`).forEach(link => link.classList.add('active'));

            sections.forEach(section => section.classList.remove('active'));

            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.classList.add('active');
                //для прокрутки
                // targetSection.scrollIntoView({
                //     behavior: 'smooth',
                //     block: 'start'
                // });
            }
        });
    });

    setTimeout(function () {
        const url = new URL(window.location.href);
        if (url.hash) {
            const targetSection = document.querySelector(url.hash);
            if (targetSection) {
                sections.forEach(section => section.classList.remove('active'));
                targetSection.classList.add('active');

                const targetLinks = document.querySelectorAll(`a[href="${url.hash}"]`);
                links.forEach(link => link.classList.remove('active'));
                targetLinks.forEach(link => link.classList.add('active'));

                // targetSection.scrollIntoView({
                //     behavior: 'smooth',
                //     block: 'start'
                // });
            }
        }
    }, 0);
});

$(document).ready(function () {
    var $menuIcon = $('.menu-toggle');
    var $navigationMenu = $('.navigation-menu');

    $menuIcon.on('click', function () {
        $navigationMenu.toggleClass('active');
    });

    $navigationMenu.on('click', function (e) {
        if (e.target === this || e.target.matches('.navigation-menu::after')) {
            $navigationMenu.removeClass('active');
        }
    });
});

$(document).ready(function () {

    const $tabs = $('.tabs-widget');

    const $tabTitles = [];

    $tabs.find('.tabs-content').each(function () {
        $tabTitles.push($(this).data('tab-title'));
    });

    const $tabsList = $tabs.find('.tabs-list');
    $tabsList.append('<ul></ul>');
    const $tabsListUl = $tabsList.find('ul');

    $.each($tabTitles, function (index, title) {
        $tabsListUl.append(`<li><span>${title}</span></li>`);
    });

    $tabs.find('.tabs-content').first().addClass('active');

    $tabsListUl.find('li').on('mouseover', function () {
        $tabs.find('.tabs-content, li').removeClass('active');

        const index = $(this).index();
        $tabs.find('.tabs-content').eq(index).addClass('active');

        $(this).addClass('active');
    });
});