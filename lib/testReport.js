'use strict';

const path = require('path');

const shell = require('shelljs');

const testCoverage = require('./testCoverage');

// eslint-disable-next-line no-empty-function
const testReport = function (callback = () => {}) {
  testCoverage([], () => {
    switch (process.platform) {
      case 'linux':
        shell.exec('xdg-open coverage/lcov-report/index.html');
        break;
      case 'darwin':
        shell.exec('open coverage/lcov-report/index.html');
        break;
      default:
        shell.echo(
          `Please open the following file:\n  ${path.join(__dirname, '..', 'coverage', 'lcov-report', 'index.html')}`
        );
    }

    callback();
  });
};

module.exports = testReport;
