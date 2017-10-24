const cfg = require('./configuration');

const ENV = cfg.Env.TEST;

module.exports = function(config) {
  var testWebpackConfig = require('./webpack.test')({ env: ENV });

  var configuration = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      {
        pattern: './karma-test-shim.js',
        watched: false
      },
      {
        pattern: '../src/assets/**/*',
        watched: false,
        included: false,
        served: true,
        nocache: false
      }
    ],


    // list of files to exclude
    exclude: [
      // Chrome is having issues with loading these fonts through Karma
      '../src/assets/fonts/experianiconfont/*.*'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './karma-test-shim.js': ['coverage', 'webpack', 'sourcemap']
    },

    webpack: testWebpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage', 'remap-coverage', 'junit'],

    coverageReporter: { 
      type: 'in-memory' 
    },

    junitReporter: {
        outputDir: '../reports',
        outputFile: 'unit-test-results.xml',
        useBrowserName: false
    },

    remapCoverageReporter: {
        'text-summary': null,
        html: './coverage/html',
        json: './coverage/coverage.json',
        cobertura: './coverage/cobertura.xml'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  };

  config.set(configuration);
}
