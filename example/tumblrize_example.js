'use strict';
var fs = require('fs');
var tumblrize = require('../lib/tumblrize.js');

var rawHtml = fs.readFileSync('./theme.html','utf8');
var tumblrModel = fs.readFileSync('./tumblr.json', 'utf8');

tumblrize.parse(rawHtml, tumblrModel);