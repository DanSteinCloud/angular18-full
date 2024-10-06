// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config: { set: (arg0: { basePath: string; frameworks: string[]; plugins: any[]; client: { clearContext: boolean; }; coverageIstanbulReporter: { dir: any; reports: string[]; fixWebpackSourcePaths: boolean; }; reporters: string[]; port: number; colors: boolean; logLevel: any; autoWatch: boolean; browsers: string[]; singleRun: boolean; }) => void; LOG_INFO: any; }) {
      config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
          require('karma-jasmine'),
          require('karma-chrome-launcher'),
          require('karma-jasmine-html-reporter'),
          require('karma-coverage-istanbul-reporter'),
          require('@angular-devkit/build-angular/plugins/karma'),
        ],
        client: {
          clearContext: false, // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
          dir: require('path').join(__dirname, '../coverage'),
          reports: ['html', 'lcovonly', 'text-summary'],
          fixWebpackSourcePaths: true,
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
      });
    };