/* global smallAngular */

smallAngular.directive('ng-app', function(scope, el) {
  console.log('called directive ng-app on element', el);
});

smallAngular.directive('ng-init', function(scope, el) {
  const data = el.getAttribute('ng-init');
  scope.eval(data);
});

smallAngular.directive('ng-show', function(scope, el) {
  const attrValue = el.getAttribute('ng-show');
  el.style.display = eval(attrValue) ? 'block' : 'none';

  scope.$watch('ng-show', () => {
    el.style.display = eval(attrValue) ? 'block' : 'none';
  });
});

smallAngular.directive('ng-hide', function(scope, el) {
  const attrValue = el.getAttribute('ng-hide');
  el.style.display = eval(attrValue) ? 'none' : 'block';

  scope.$watch('ng-hide', () => {
    el.style.display = eval(attrValue) ? 'none' : 'block';
  });
});

smallAngular.directive('ng-click', function(scope, el) {
  el.addEventListener('click', () => {
    const attrValue = el.getAttribute('ng-click');
    eval(attrValue);
  });

  scope.$apply();
});

smallAngular.directive('ng-model', function(scope, el) {
  console.log('called directive ng-model on element', el);
});

smallAngular.directive('ng-make-short', function(scope, el) {
  const length = el.getAttribute('length');
  el.innerHTML = el.innerHTML.slice(0, length);
});

smallAngular.directive('ng-bind', function(scope, el) {
  console.log('called directive ng-bind on element', el);
})