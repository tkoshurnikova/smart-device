'use strict';

(function () {
  var pageFooter = document.querySelector('.page-footer');

  if (pageFooter) {
    var accordionElements = pageFooter.querySelectorAll('.accordion-element');

    var removeActiveClass = function () {
      var openedElements = pageFooter.querySelectorAll('.accordion-element--opened');
      if (openedElements) {
        openedElements.forEach(function (element) {
          element.classList.remove('accordion-element--opened');
        });
      }
    };

    accordionElements.forEach(function (accordionElement) {
      accordionElement.classList.remove('accordion-element--no-js');

      var button = accordionElement.querySelector('button');

      var toggleSection = function () {

        if (accordionElement.classList.contains('accordion-element--opened')) {
          accordionElement.classList.remove('accordion-element--opened');
        } else {
          removeActiveClass();
          accordionElement.classList.add('accordion-element--opened');
        }
      };

      button.addEventListener('click', toggleSection);
    });
  }
})();
