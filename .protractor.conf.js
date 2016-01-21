exports.config = {
  // https://angular.github.io/protractor/#/tutorial
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine',
  specs: [
    'test/e2e/world.spec.js'
  ],
  exclude: [
  ],
  capabilities: {
    browserName: 'chrome'
    //browserName: 'firefox'
  }
};
