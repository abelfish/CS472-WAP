"use strict"

var add = (function () {
	var counter = 0;
	return function () {
		return counter += 1;
	}();
})(); 
console.log(add);