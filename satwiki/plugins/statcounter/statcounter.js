/*\
title: $:/plugins/statcounter/statcounter.js
type: application/javascript
module-type: startup

Runs StatCounter with the codes in the tiddler `$:/StatCounterProject` and `$:/StatCounterSecurity`

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

// Export name and synchronous status
exports.name = "statcounter";
exports.platforms = ["browser"];
exports.synchronous = true;

var CONFIG_CONSENT_REQUIRED_TITLE = "$:/config/cookie-consent-required",
	CONSENT_TITLE = "$:/state/consent-banner/accepted"; // "": undeclared, "yes": accepted, "no": declined

exports.startup = function() {
	var hasInitialised = false,
		initialiseStatCounter = function() {
			console.log("Initialising StatCounter");
			hasInitialised = true;
			var sc_project = $tw.wiki.getTiddlerText("$:/StatCounterProject","").replace(/\n/g,""),
				sc_security = $tw.wiki.getTiddlerText("$:/StatCounterSecurity","auto").replace(/\n/g,""),
				sc_invisible = 1;
			const SC = document.createElement("SC");
			SC.type = "text/javascript";
			SC.src = "https://www.statcounter.com/counter/counter.js";
			SC.async = "";
			document.head.appendChild(SC);
			eval(SC);
		};
	// Initialise now if consent isn't required
	if($tw.wiki.getTiddlerText(CONFIG_CONSENT_REQUIRED_TITLE) !== "yes") {
		initialiseStatCounter();
	} else {
		// Or has been granted already
		if($tw.wiki.getTiddlerText(CONSENT_TITLE) === "yes") {
			initialiseStatCounter();
		} else {
			// Or when our config tiddler changes
			$tw.wiki.addEventListener("change",function(changes) {
				if(changes[CONSENT_TITLE]) {
					if(!hasInitialised && $tw.wiki.getTiddlerText(CONSENT_TITLE) === "yes") {
						initialiseStatCounter();
					}
				}
			});
		}
	}
};



})();
