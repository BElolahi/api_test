const { defineConfig } = require('cypress')

module.exports = defineConfig({
 
  setupNodeEvents(on, config) {
    return config ; 
    // here you can add ur plugin folder.(register)
    //return require('./cypress/plugins/index')(on,config); 
  },
  component: {
    viewportWidth: 500,
    viewportHeight: 500
  },
  e2e: {
    projectId: "pj57oz",
    defaultCommandTimeout: 10000,
    specPattern:"**/*.cy.{js,jsx,ts,tsx}",
    fixturesFolder: "./cypress/fixtures",
    supportFile: "./cypress/support/e2e.{js,jsx,ts,tsx}",
    chromeWebSecurity: false,
    video: false,
    screenshot: false,
    screenshotOnRunFailure: false,
  }
})