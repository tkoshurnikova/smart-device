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
    var isStorageSupport = true;

    try {
      var nameInput = localStorage.getItem('formName');
      var phoneInput = localStorage.getItem('formPhone');
      var messageInput = localStorage.getItem('formMessage');
    } catch (err) {
      isStorageSupport = false;
    }

    openPopupButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.remove('popup--closed');

      if (isStorageSupport) {
        formName.value = nameInput;
        formPhone.value = phoneInput;
        formMessage.value = messageInput;
      }
    });

    closePopup.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.add('popup--closed');
    });
  }
})();
