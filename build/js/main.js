
'use strict';

(function () {
  var pageFooter = document.querySelector('.page-footer');

  if (pageFooter) {
    var accordionElements = pageFooter.querySelectorAll('.accordion-element');

    accordionElements.forEach(function (accordionElement) {
      accordionElement.classList.remove('accordion-element--no-js');
      var button = accordionElement.querySelector('button');
      var sectionHeading = accordionElement.querySelector('h3');

      var toggleSection = function () {
        accordionElement.classList.toggle('accordion-element--opened');

        if (accordionElement.classList.contains('accordion-element--opened')) {
          button.innerHTML = '<span class="visually-hidden">Закрыть раздел</span><svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0.5H16V1.5H0V0.5Z" fill="#C4C4C4"/></svg>';
        } else {
          button.innerHTML = '<span class="visually-hidden">Открыть раздел</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 7.5V0H7.5V7.5H0V8.5H7.5V16H8.5V8.5H16V7.5H8.5Z" fill="#C4C4C4"/></svg>';
        }
      };

      button.addEventListener('click', toggleSection);
      sectionHeading.addEventListener('click', toggleSection);
    });
  }
})();

'use strict';

(function () {
  var createPhoneMask = function (input) {
    if (input) {
      window.addEventListener('DOMContentLoaded', function () {
        function setCursorPosition(pos, elem) {
          elem.focus();
          if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
          } else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
          }
        }

        function mask(event) {
          var matrix = '+7 (___) ___ ____';
          var i = 0;
          var def = matrix.replace(/\D/g, '');
          var val = input.value.replace(/\D/g, '');

          if (def.length >= val.length) {
            val = def;
          }
          input.value = matrix.replace(/./g, function (a) {
            if (/[_\d]/.test(a) && i < val.length) {
              return val.charAt(i++);
            } else if (i >= val.length) {
              return '';
            } else {
              return a;
            }
          });
          if (event.type === 'blur') {
            if (input.value.length === 2) {
              input.value = '';
            }
          } else {
            setCursorPosition(input.value.length, input);
          }
        }

        input.addEventListener('input', mask, false);
        input.addEventListener('focus', mask, false);
        input.addEventListener('blur', mask, false);
      });
    }
  };

  var phoneInputs = document.querySelectorAll('input[type=tel]');
  phoneInputs.forEach(function (phoneInput) {
    createPhoneMask(phoneInput);
  });
})();

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
