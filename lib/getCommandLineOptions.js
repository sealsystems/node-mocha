'use strict';

const getCommandLineOptions = function (prefix, argumentList) {
  const options = [];

  argumentList.forEach((element) => {
    if (element.startsWith(prefix)) {
      options.push(element.substr(prefix.length));
    }
  });

  return options;
};

module.exports = getCommandLineOptions;
