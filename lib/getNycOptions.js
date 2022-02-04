'use strict';

const getCommandLineOptions = require('./getCommandLineOptions');

const getNycOptions = function (additionalOptions = []) {
  const cmdOptions = getCommandLineOptions('-nyc', process.argv);

  return [
    '--all',
    '--clean',
    '--include "lib/**/*.js"',
    '--include "src/**/*.js"',
    '--reporter=lcov',
    '--reporter=text-summary',
    '--branches 80',
    '--functions 80',
    '--lines 80',
    '--statements 80',
    ...cmdOptions,
    ...additionalOptions
  ].join(' ');
};

module.exports = getNycOptions;
