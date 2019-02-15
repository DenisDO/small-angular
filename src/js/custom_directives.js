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
  el.innerHTML = el.innerHTML.slice(0, length);
});