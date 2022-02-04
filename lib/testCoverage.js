'use strict';

const shell = require('shelljs');

const getMochaOptions = require('./getMochaOptions');
const getNycOptions = require('./getNycOptions');

// eslint-disable-next-line no-empty-function
const testCoverage = function (additionalNycOptions = [], callback = () => {}) {
  shell.echo('');
  shell.echo('Collecting coverage...');
  shell.echo('');
  shell.exec(`nyc ${getNycOptions(additionalNycOptions)} mocha ${getMochaOptions()}`, (codeUnitTests) => {
    if (codeUnitTests !== 0) {
      // eslint-disable-next-line no-process-exit
      process.exit(1);
    }

    shell.echo('');
    shell.echo('Done.');
    callback();
  });
};

module.exports = testCoverage;
