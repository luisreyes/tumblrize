/*
 * 
 * https://github.com/luisreyes/tumblrize
 *
 * Copyright (c) 2014 Luis Reyes
 * Licensed under the MIT license.
 */

'use strict';

exports.parse = function(data, model) {
	
	var 
	// Raw Data - Remove spaces between html nodes
	rd = data.replace(/(?!\>)\s+(?=\<)/g, ''),
	// Blocks - Collection
	b = rd.match(/(\{)[\w]+(\})/g),
	// Keys - Collection of blocks to be compiled
	k = {},
	// Model - Parse to Object
	m = typeof(model) !== 'object' ? JSON.parse(model) : model,

	m = parseBlocks(m);
/*
	pd;

	// Clean blocks for keying
	b.forEach( function( block ){
		// Remove brackets
		var key = block.replace(/[\{\}]/g,'');
		
		k[key] = m[key] || '';
	}); 

	// for (var key in k){
	// 	var obj = k[key];
		for( var key in k ){
			if(k.hasOwnProperty(key)){
				console.log(k[key]);
			 	pd = rd.replace(key, k[key]);
			}
		}
	//}	
	console.log(pd);
*/
	function parseBlocks(model){
		var parsed;

		console.log(typeof(model));

		for( var val in model ){
			if(model.hasOwnProperty(val)){
				console.log(val + ' = '+model[val]);
			}
		}

		return parsed;
	}
  return 'parse';
};
