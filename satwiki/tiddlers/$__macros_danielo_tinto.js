(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
This is developed to put some text in color.

<<tinto "text" "green">>
<<tinto "text">> (will be red)
<$macrocall $name="tinto" color="pink" text="elephant"/>
*/

exports.name = "tinfo";

exports.params = [

        { name: "text" },
        { name: "color" }

];

/*
Run the macro
*/
exports.run = function(text, color) {

    if( !text) text = "IMPORTANT";

    if( !color) color = "red";

    return "<span style='color:" + color + "'>" + text + "</span>";
};

})();
