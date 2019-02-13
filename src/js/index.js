(function() {
  const directives = {};

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
          directives[name](node);
        }
      });
    },

    bootstrap(node) {
      let entryPoint = node;

      if (!node) {
        entryPoint = document.querySelector('[ng-app]');
      }

      if (!entryPoint) {
        throw new Error('There is no entry point!');
      }
      this.compile(entryPoint);
      entryPoint.querySelectorAll('*').forEach(el => {
        this.compile(el);
      });
    }
  };

  window.smallAngular = smallAngular;
})();