#! /usr/bin/env node

'use strict';

var tumblrize = require('./tumblrize');

var userArgs = process.argv;
var searchParam = userArgs[2];

if (userArgs.indexOf('-h') !== -1 || userArgs.indexOf('--help') !== -1 || searchParam === undefined) {
    return console.log('cli help');
}

if (userArgs.indexOf('-v') !== -1 || userArgs.indexOf('--version') !== -1) {
    return console.log(require('./package').version);
}