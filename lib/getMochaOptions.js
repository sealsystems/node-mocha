'use strict';

const getCommandLineOptions = require('./getCommandLineOptions');

const conditionalPush = function (cmdOptions, options, opt) {
  const index = cmdOptions.indexOf(`--no-${opt}`);
  if (index > -1) {
    cmdOptions.splice(index, 1);
  } else {
    options.push(`--${opt}`);
  }
};
const getMochaOptions = function (additionalOptions = []) {
  const cmdOptions = getCommandLineOptions('-mocha', process.argv);

  const options = [`"test/**/*Test.js"`];
  conditionalPush(cmdOptions, options, 'bail');
  conditionalPush(cmdOptions, options, 'color');
  conditionalPush(cmdOptions, options, 'exit');
  conditionalPush(cmdOptions, options, 'recursive');
  options.push('--ui tdd', ...cmdOptions, ...additionalOptions);

  return options.join(' ');
};

module.exports = getMochaOptions;
