/* global smallAngular */

smallAngular.directive('ng-app', function(rootScope, el) {
  console.log('called directive ng-app on element', el);
});

smallAngular.directive('ng-init', function(rootScope, el) {
  const data = el.getAttribute('ng-init');
  rootScope.eval(data);
});

smallAngular.directive('ng-show', function(rootScope, el) {
  const attrValue = el.getAttribute('ng-show');
  el.style.display = eval(attrValue) ? 'block' : 'none';

  rootScope.$watch('ng-show', () => {
    el.style.display = eval(attrValue) ? 'block' : 'none';
  });
});

smallAngular.directive('ng-hide', function(rootScope, el) {
  const attrValue = el.getAttribute('ng-hide');
  el.style.display = eval(attrValue) ? 'none' : 'block';

  rootScope.$watch('ng-hide', () => {
    el.style.display = eval(attrValue) ? 'none' : 'block';
  });
});

smallAngular.directive('ng-click', function(rootScope, el) {
  el.addEventListener('click', () => {
    const attrValue = el.getAttribute('ng-click');
    eval(attrValue);
  });

  rootScope.$apply();
});

smallAngular.directive('ng-model', function(rootScope, el) {
  console.log('called directive ng-model on element', el);
});

smallAngular.directive('ng-make-short', function(rootScope, el) {
  console.log('called directive ng-make-short on element', el);
});

smallAngular.directive('ng-bind', function(rootScope, el) {
  console.log('called directive ng-bind on element', el);
});