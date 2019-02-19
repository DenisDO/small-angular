(function() {
  const directives = {};
  const watchers = [];
  const rootScope = window;

  rootScope.$watch = (name, watcher) => {
    watchers.push({ name, watcher });
  };

  rootScope.$apply = () => {
    watchers.forEach(({ watcher }) => watcher());
  };

  const smallAngular = {
    directive(attrName, callback) {
      if (!attrName || !callback) {
        throw new Error('Required parameter is missed!');
      }

      if (attrName in directives) {
        throw new Error('Multiply directives are not allowed!');
      }

      if (typeof callback !== 'function') {
        throw new Error('Callback must be a function!');
      }

      directives[attrName] = callback;
    },

    compile(node) {
      const attributes = node.getAttributeNames();

      attributes.forEach(name => {
        if (name in directives) {
          directives[name](rootScope, node);
        }
      });
    },

    bootstrap(node) {
      const entryPoint = node || document.querySelector('[ng-app]');

      if (!entryPoint) {
        return;
      }
      this.compile(entryPoint);
      entryPoint.querySelectorAll('*').forEach(this.compile);
      rootScope.$apply();
    }
  };

  window.smallAngular = smallAngular;
})();