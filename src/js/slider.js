'use strict';

// REVIEWS SLIDER
(() => {
  $('.slides__list').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    navText: ['', ''],
    pagination: true,
    items: 1,
  });

  let btnMobile = [...document.querySelectorAll('.slides__button_mobile')];
  let btnDesktop = [...document.querySelectorAll('.slides__button_desktop')];
  let owlDot = [...document.querySelectorAll('.owl-dot')];

  const moreInfo = e => {
    let target = e.target;
    let moreText = target.previousSibling;

    if (moreText.classList.contains('slides__about_active')) {
      target.innerHTML = 'Read more';
    } else {
      target.innerHTML = 'Collapse';
    }

    moreText.classList.toggle('slides__about_active');
  };

  const closeMoreInfo = () => {
    let allText = document.querySelectorAll('.slides__about');
    let allTextTablet = document.querySelectorAll('.slides__about-tablet');

    btnMobile.forEach(e => {
      e.innerHTML = 'Read more';
    });

    btnDesktop.forEach(e => {
      e.innerHTML = 'Read more';
    });

    allText.forEach(e => {
      e.classList.remove('slides__about_active');
    });

    allTextTablet.forEach(e => {
      e.classList.remove('slides__about_active');
    });
  };

  btnMobile.forEach(e => {
    e.addEventListener('click', moreInfo);
  });

  btnDesktop.forEach(e => {
    e.addEventListener('click', moreInfo);
  });

  owlDot.forEach(e => {
    e.addEventListener('click', closeMoreInfo);
  });
})();