'use strict';

(function () {
  var input = document.querySelector('#phone');
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
})();
