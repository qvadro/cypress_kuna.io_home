const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://kuna.io/',
    viewportHeight: 896,
    viewportWidth: 414,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
