(function() {
  const directives = [];

  const smallAngular = {
    directive(attrName, callback) {
        if (!attrName || !callback) {
            throw new Error('Required parameter is missed!');
        }

        if (typeof callback !== 'function') {
            throw new Error('Callback must be a function!');
        }

        directives.push({attrName, callback});
    }
  };

  window.smallAngular = smallAngular;
})();