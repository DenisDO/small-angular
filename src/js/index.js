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

    compile({ attributes }) {
      for (let i = 0; i < attributes.length; i++) {
        const attrName = attributes[i].name;

        if (attrName in directives) {
          directives[attrName]();
        }
      }
    }
  };

  window.smallAngular = smallAngular;
})();