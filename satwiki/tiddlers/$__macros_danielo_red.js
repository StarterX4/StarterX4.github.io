/*\
title: $:/macros/skeeve/red.js
type: application/javascript
module-type: macro

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
This is developed to put some text in red.
*/

exports.name = "red";

exports.params = [
	{ name: "textToColorize" }
];

/*
Run the macro
*/
exports.run = function(textToColorize) {
	if( !textToColorize) textToColorize = "IMPORTANT";
		return spanize(textToColorize,"red");
    
    function spanize(texto,color){
    	return "<span style='color:" + color + "'>" + texto + "</span>";
    }

};

})();