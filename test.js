'use strict';

var equal = require('assert').equal,
  hash = require('./index.js');

describe('## hash', function() {
  it('# success', function() {
    equal(hash.hashCode('hashCode'), 147696667);
  });
});
