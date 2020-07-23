'use strict';

(function () {
  var popup = document.querySelector('.popup');
  if (popup) {

    var openPopupButton = document.querySelector('#open-popup');
    var closePopup = popup.querySelector('.popup__close-button');
    var form = popup.querySelector('.form');
    var formName = form.querySelector('[name=popup-name]');
    var formPhone = form.querySelector('[name=popup-phone]');
    var formMessage = form.querySelector('[name=popup-question]');
    var overlay = document.querySelector('.overlay');
    var body = document.querySelector('body');
    var isStorageSupport = true;
    var storage = '';

    try {
      storage = localStorage.getItem('formName');
    } catch (err) {
      isStorageSupport = false;
    }

    var onOpenButtonClick = function (evt) {
      evt.preventDefault();
      popup.classList.remove('popup--closed');
      overlay.classList.remove('overlay--hidden');
      body.classList.add('no-scroll');
      formName.focus();
      window.addEventListener('keydown', onEscPress);
      if (storage) {
        formName.value = storage;
        formPhone.value = localStorage.getItem('formPhone');
        formMessage.value = localStorage.getItem('formMessage');
      }
    };

    var onCloseButtonClick = function (evt) {
      evt.preventDefault();
      popup.classList.add('popup--closed');
      overlay.classList.add('overlay--hidden');
      body.classList.remove('no-scroll');
      window.removeEventListener('keydown', onEscPress);
    };

    var onEscPress = function (evt) {
      if (evt.keyCode === 27 && !popup.classList.contains('popup--closed')) {
        onCloseButtonClick(evt);
      }
    };

    openPopupButton.addEventListener('click', onOpenButtonClick);

    form.addEventListener('submit', function () {
      if (isStorageSupport) {
        localStorage.setItem('formName', formName.value);
        localStorage.setItem('formPhone', formPhone.value);
        localStorage.setItem('formMessage', formMessage.value);
      }
    });

    closePopup.addEventListener('click', onCloseButtonClick);
    overlay.addEventListener('click', onCloseButtonClick);
  }
})();
