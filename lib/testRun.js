'use strict';

const shell = require('shelljs');

const getMochaOptions = require('./getMochaOptions');

// eslint-disable-next-line no-empty-function
const testRun = function (callback = () => {}) {
  shell.echo('');
  shell.echo('Running unit tests...');
  shell.echo('');
  shell.exec(`mocha ${getMochaOptions()}`, (codeUnitTests) => {
    if (codeUnitTests !== 0) {
      // eslint-disable-next-line no-process-exit
      process.exit(1);
    }

    shell.echo('');
    shell.echo('Done.');
    callback();
  });
};

module.exports = testRun;
