(function() {
  const directives = {};

  const smallAngular = {
    directive(attrName, callback) {
      if (!attrName || !callback) {
        throw new Error('Required parameter is missed!');
      }

      if (typeof callback !== 'function') {
        throw new Error('Callback must be a function!');
      }

      directives[attrName] = callback;
    },

    compile(node) {
      const { attributes } = node;

      [...attributes].forEach(({ name }) => {
        if (name in directives) {
          directives[name](node);
        }
      });
    },

    bootstrap(node) {
      let element = node;

      if (!node) {
        element = document.querySelector('[ng-app]');
      }

      if (!element) {
        throw new Error('There is no entry point!');
      }
      this.compile(element);
      const { children } = element;
      [...children].forEach(el => {
        this.compile(el);
      });
    }
  };

  window.smallAngular = smallAngular;
})();