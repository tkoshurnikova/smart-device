
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
