'use strict';

setTimeout(function () {
  document.getElementById('alert').style.display = 'none';
}, 5000);

const closeModal = document
  .getElementById('close')
  .addEventListener(
    'click',
    () => (document.getElementById('modal').style.display = 'none')
  );
