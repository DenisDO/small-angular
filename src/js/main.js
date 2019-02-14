/* global smallAngular */

smallAngular.directive('ng-app', function(el) {
  console.log('called directive ng-app on element', el);
});

smallAngular.directive('ng-init', function(el) {
  console.log('called directive ng-init on element', el);
});

smallAngular.directive('ng-show', function(el) {
  const attrValue = el.getAttribute('ng-show');
  el.style.display = eval(attrValue) ? 'block' : 'none';
});

smallAngular.directive('ng-click', function(el) {
  el.addEventListener('click', () => {
    const attrValue = el.getAttribute('ng-click');
    eval(attrValue);
  });
});

smallAngular.directive('ng-model', function(el) {
  console.log('called directive ng-model on element', el);
});

smallAngular.directive('ng-make-short', function(el) {
  console.log('called directive ng-make-short on element', el);
});

smallAngular.directive('ng-bind', function(el) {
  console.log('called directive ng-bind on element', el);
});