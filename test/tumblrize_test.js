/*global describe,it*/
'use strict';
var assert = require('assert'),
  tumblrize = require('../lib/tumblrize.js');

describe('tumblrize node module.', function() {
  it('must be awesome', function() {
    assert( tumblrize.awesome(), 'awesome');
  });
});
