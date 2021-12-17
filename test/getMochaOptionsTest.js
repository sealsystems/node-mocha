'use strict';

const assert = require('assertthat');

const getMochaOptions = require('../lib/getMochaOptions');

suite('getMochaOptions', () => {
  test('is a function.', async () => {
    assert.that(getMochaOptions).is.ofType('function');
  });

  test('returns standard parameter list', async () => {
    const result = getMochaOptions();

    assert.that(result).is.equalTo('"test/**/*Test.js" --bail --color --exit --recursive --ui tdd');
  });

  test('adds additional paramters to list', async () => {
    const result = getMochaOptions(['hugo', 'hansi']);

    assert.that(result).is.equalTo('"test/**/*Test.js" --bail --color --exit --recursive --ui tdd hugo hansi');
  });

  test('adds command line paramters to list', async () => {
    const tmp = process.argv;

    process.argv = ['node', 'test-run', '-mocha--meins', '-nyc--deins'];
    const result = getMochaOptions();
    process.argv = tmp;

    assert.that(result).is.equalTo('"test/**/*Test.js" --bail --color --exit --recursive --ui tdd --meins');
  });

  test('adds all paramters to list', async () => {
    const tmp = process.argv;

    process.argv = ['node', 'test-run', '-mocha--meins', '-nyc--deins'];
    const result = getMochaOptions(['hugo']);
    process.argv = tmp;

    assert.that(result).is.equalTo('"test/**/*Test.js" --bail --color --exit --recursive --ui tdd --meins hugo');
  });
});

test('deactivates standard options', async () => {
  const tmp = process.argv;

  process.argv = [
    'node',
    'test-run',
    '-mocha--no-bail',
    '-mocha--no-color',
    '-mocha--no-exit',
    '-mocha--no-recursive',
    '-mocha--meins'
  ];
  const result = getMochaOptions();
  process.argv = tmp;

  assert.that(result).is.equalTo('"test/**/*Test.js" --ui tdd --meins');
});
