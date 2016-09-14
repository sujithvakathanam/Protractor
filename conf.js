// An example configuration file.
exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['specs/*/*_spec.js'],

    suites : {
      Angular : 'specs/Angular/*_spec.js',
      NonAngular : 'specs/NonAngular/*_spec.js'
    },
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    onPrepare: function () {
       browser.driver.manage().window().maximize();
    }
};
