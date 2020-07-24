'use strict';

(function () {
  var pageFooter = document.querySelector('.page-footer');

  if (pageFooter) {
    var accordionElements = pageFooter.querySelectorAll('.accordion-element');

    accordionElements.forEach(function (accordionElement) {
      accordionElement.classList.remove('accordion-element--no-js');
      var button = accordionElement.querySelector('#open-section');

      button.addEventListener('click', function () {
        accordionElement.classList.toggle('accordion-element--opened');

        var svgElement = button.querySelector('button');

        if (accordionElement.classList.contains('accordion-element--opened')) {
          svgElement.innerHTML = '<span class="visually-hidden">Закрыть раздел</span><svg width="16" height="2"><use xlink:href="#icon-minus"></use></svg>';
        } else {
          svgElement.innerHTML = '<span class="visually-hidden">Открыть раздел</span><svg width="16" height="16"><use xlink:href="#icon-plus"></use></svg>';
        }
      });
    });
  }
})();
