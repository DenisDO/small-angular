/* global smallAngular */

smallAngular.directive('random-color', function(scope, el) {
  el.addEventListener('click', () => {
    const hex = Math.floor(Math.random() * 0xffffff);
    const color = '#' + ('000000' + hex.toString(16)).substr(-6);
    el.style.backgroundColor = color;
  });
});

smallAngular.directive('make-short', function(scope, el) {
  const length = el.getAttribute('length') || 5;
  el.innerText = el.innerText.slice(0, length);
});

smallAngular.directive('uppercase', function(scope, el) {
  el.innerText = el.innerText.toUpperCase();
});

smallAngular.directive('lowercase', function(scope, el) {
  el.innerText = el.innerText.toLowerCase();
});