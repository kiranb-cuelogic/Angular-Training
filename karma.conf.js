// Karma configuration
// Generated on Sat May 07 2016 11:03:58 GMT+0530 (India Standard Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // 'bower_components/angular/angular.js',
            // 'bower_components/angular-ui-router/release/angular-ui-router.min.js',
            // 'bower_components/angular-mocks/angular-mocks.js',


            'bower_components/lodash/dist/lodash.min.js',
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'bower_components/ngStorage/ngStorage.min.js',
            'bower_components/angular-messages/angular-messages.min.js',
            'bower_components/angular-animate/angular-animate.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'bower_components/angular-mocks/angular-mocks.js',

            'app/common/providers/index.provider.js',
            'app/common/providers/credentials.provider.js',

            'app/common/services/index.service.js',
            'app/common/services/session_injector.service.js',
            'app/common/services/login.service.js',
            'app/common/services/employees.service.js',


            'app/common/directives/index.directive.js',
            'app/common/directives/unique_email.directive.js',
            'app/common/directives/header.directive.js',



            'app/modules/login/login.index.js',
            'app/modules/login/login.controller.js',
            'app/modules/login/login.route.js',
            'app/modules/home/home.index.js',
            'app/modules/home/home.controller.js',
            'app/modules/home/home.route.js',
            'app/modules/edit/edit.index.js',
            'app/modules/edit/edit.controller.js',
            'app/modules/edit/add.controller.js',
            'app/modules/edit/edit.route.js',

            'app/app.js',

            'tests/**/**/*.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    })
}
