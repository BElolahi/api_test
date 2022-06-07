const { defineConfig } = require('cypress')

module.exports = defineConfig({
 
  setupNodeEvents(on, config) {
    return config ;
  },
  component: {
    viewportWidth: 500,
    viewportHeight: 500
  },
  // Command timeout overridden for E2E tests
  e2e: {
    defaultCommandTimeout: 10000,
    specPattern:"**/*.cy.{js,jsx,ts,tsx}",
    projectId: "pj57oz",
    fixturesFolder: "./cypress/fixtures",
    supportFile: "./cypress/support/e2e.{js,jsx,ts,tsx}",
    chromeWebSecurity: false,
    video: false,
    screenshot: false,
    screenshotOnRunFailure: false,
  }
})