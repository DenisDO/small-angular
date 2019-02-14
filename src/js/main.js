/* global smallAngular */

smallAngular.directive('ng-app', function(scope, el) {
  console.log('called directive ng-app on element', el);
});

smallAngular.directive('ng-random-color', function(scope, el) {
  el.addEventListener('click', () => {
    const hex = Math.floor(Math.random() * 0xFFFFFF);
    const color = '#' + ('000000' + hex.toString(16)).substr(-6);
    el.style.backgroundColor = color;
  });
});

smallAngular.directive('ng-init', function(scope, el) {
  const data = el.getAttribute('ng-init');
  scope.eval(data);
});

smallAngular.directive('ng-repeat', function(scope, el) {
  const parent = el.parentElement;
  const data = eval(el.getAttribute('ng-repeat'));
  const quantity = data.length;

  for (let i = 0; i < quantity; i++) {
    const newNode = el.cloneNode();
    newNode.innerHTML = data[i];
    parent.appendChild(newNode);
  }

  parent.removeChild(el);
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
    scope.$apply();
  });
});

smallAngular.directive('ng-model', function(scope, el) {
  console.log('called directive ng-model on element', el);
});

smallAngular.directive('ng-make-short', function(scope, el) {
  const length = el.getAttribute('length');
  el.innerHTML = el.innerHTML.slice(0, length);
});

smallAngular.directive('ng-bind', function(scope, el) {
  const data = el.getAttribute('ng-bind');

  if (data in scope) {
    el.innerHTML = eval(data);
    scope.$watch('ng-bind', () => {
      el.innerHTML = eval(data);
    });
  }
});

smallAngular.bootstrap();